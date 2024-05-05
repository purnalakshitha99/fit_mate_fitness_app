import React, { useState } from "react";
import UserService from "../../services/UserService";
import ImageUpload from "../../pages/ImageUpload";

const MyActivities = ({ closeMyActivities }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.savePost({ title, content });
      console.log("Post saved successfully!");
      // Optionally, you can redirect the user or show a success message
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px]">
        <button
          className="text-white text-xl place-self-end"
          onClick={closeMyActivities}
        >
          X
        </button>
        <div className="bg-white p-10 rounded">
          MyActivitiesmodal
          <div className=" border border-black rounded-md p-5  space-y-7 mt-4 shadow-lg">
            <h2>Create New Post</h2>
            <form className=" space-y-7 " onSubmit={handleSubmit}>
              <div className=" ">
                <label htmlFor="lastName" className="block text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="title "
                  className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Content
                </label>
                <textarea
                  placeholder="Address"
                  name="bio"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                ></textarea>
              </div>
              <div>
                <div className=" space-y-5">
                  <input type="file" />
                  <button className="bg-green-600 px-3 rounded">Upload</button>
                  <div className=" h-[200px]">Uploaded images</div>
                </div>
              </div>
              <div className=" flex">
                <button className="bg-green-600 px-3  rounded" type="submit">
                  Save Post
                </button>
                <button
                  className="bg-red-600 px-5 rounded ml-auto"
                  type="submit"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyActivities;
