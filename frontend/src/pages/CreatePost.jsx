import React, { useState } from "react";
import PostService from "../services/PostService";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PostService.savePost({ title, content });
      console.log("Post saved successfully!");
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
