import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogPost } from "../utils/blogTypes";
import Link from "@tiptap/extension-link";

function BlogPostView() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  const editor = useEditor({
    extensions: [StarterKit, Link],
    content: "",
    editable: false,
  });

  useEffect(() => {
    async function loadPost() {
      try {
        const file = await import(`../assets/articles/${id}.json`);
        setPost(file.default);
        editor?.commands.setContent(file.default.content);
      } catch (error) {
        console.error("Error loading blog post:", error);
      }
    }

    loadPost();
  }, [id, editor]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="py-20 px-20">
      <div className="flex items-center gap-4 mb-2">
        <button
          onClick={() => window.history.back()}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ←
        </button>
        <h1 className="text-4xl mb-2 font-rasa">{post.title.toLowerCase()}</h1>
      </div>
      <p className="text-gray-400 text-sm font-dm">
        {post.date.split("-").join("/")}
      </p>
      <EditorContent
        editor={editor}
        className="text-white prose-strong:text-white prose-a:text-orange-500 prose prose-sm max-w-none"
      />
    </div>
  );
}

export default BlogPostView;
