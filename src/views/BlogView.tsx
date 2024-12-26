import React from "react";
import cameraImage from "../assets/archish_camera.png";

const blogPosts = [
  {
    title: "Blog Post 1",
    date: "2024-01-01",
    content: "This is the content of the first blog post.",
    summary: "This is the summary of the first blog post.",
    id: "blog-post-1",
  },
  {
    title: "Blog Post 2",
    date: "2024-01-02",
    content: "This is the content of the second blog post.",
    summary: "This is the summary of the second blog post.",
    id: "blog-post-2",
  },
  {
    title: "Blog Post 3",
    date: "2024-01-03",
    content: "This is the content of the third blog post.",
    summary: "This is the summary of the third blog post.",
    id: "blog-post-3",
  },
];

function BlogView() {
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
          <div className="flex justify-between">
            <h1 className="text-4xl">blog</h1>
            <input
              type="text"
              placeholder="search..."
              className=" bg-transparent   focus:outline-none focus:border-none"
            ></input>
          </div>
        </div>
        <div className="space-y-5">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="hover:cursor-pointer">
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
                <hr className="mt-5 border-gray-400 stroke-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogView;
