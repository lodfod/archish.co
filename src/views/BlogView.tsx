import React, { useState, useEffect } from "react";
import cameraImage from "../assets/archish_camera.png";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  summary: string;
}

function BlogView() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadBlogPosts() {
      try {
        // Get all markdown files from the articles directory
        const markdownFiles = import.meta.glob("../assets/articles/*.json");
        const posts: BlogPost[] = [];

        for (const path in markdownFiles) {
          const file = (await markdownFiles[path]()) as BlogPost;
          const filename = path.split("/").pop()?.replace(".md", "") || "";

          posts.push({
            id: file.id,
            title: file.title || filename,
            date: file.date || "No date",
            content: file.content,
            summary: file.summary || "",
          });
        }

        // Sort posts by date, newest first
        posts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      }
    }

    loadBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="py-20 px-20 font-rasa text-2xl">
        <div className="flex items-center">
          <span className="hover:cursor-pointer font-medium text-2xl">
            <div
              onClick={() => (window.location.href = "/")}
              className="w-5 h-5 transition-colors delay-75 bg-gray-400 hover:bg-clip-border hover:text-transparent hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500"
            />
          </span>
          <img
            src={cameraImage}
            className=" object-scale-down h-7 hover:cursor-pointer grayscale w-12 hover:grayscale-0"
          />
        </div>
        <div className="py-10">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl">blog</h1>
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 absolute left-0 transition-transform duration-300 peer-focus:translate-x-2 peer-focus:scale-75 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="peer bg-transparent w-32 focus:w-48 transition-all duration-300 focus:outline-none border-b border-transparent focus:border-gray-400 pl-7 placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="hover:cursor-pointer group transition-all duration-200 hover:bg-white/5 p-4 -mx-4 rounded-lg"
              onClick={() => (window.location.href = `/blog/${post.id}`)}
            >
              <div className="flex justify-between">
                <h1 className="text-xl">{post.title.toLowerCase()}</h1>
                <div className="flex items-center">
                  <p className="text-gray-400 text-xs font-dm">
                    {post.date.split("-").reverse().join("/")}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-dm">{post.summary}</p>
              {index < blogPosts.length - 1 && (
                <hr className="mt-5 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogView;
