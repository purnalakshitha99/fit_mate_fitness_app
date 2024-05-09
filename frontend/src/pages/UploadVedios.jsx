import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { app } from "../config/Config";
import toast from "react-hot-toast";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const storage = getStorage(app);

const UploadVideos = () => {
  const [loggedIn, setLoggedIn] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [post, setPost] = useState({
    content: "",
    videoUrl: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      // fetchUser();
    }
    setLoggedIn(JSON.parse(userData));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Please select a video file");
      return;
    }

    try {
      const videoRef = ref(storage, `/videos/${selectedFile.name}`);
      await uploadBytes(videoRef, selectedFile);
      const videoUrl = await getDownloadURL(videoRef);

      const postData = {
        ...post,
        videoUrl: videoUrl,
      };

      // Save post data
      await UserService.savePost(postData, loggedIn.id);
      toast.success("Video uploaded successfully");
      // Clear input fields
      setSelectedFile(null);
      setPreviewUrl(null);
      setPost({ content: "", videoUrl: "" });
      navigate("/home");
    } catch (error) {
      console.error("Error uploading video:", error);
      toast.error("An error occurred while uploading the video");
    }
  };

  return (
    <div>
      <div>
        <div className="fixed top-0 left-0 w-full z-10">
          <NavBar />
        </div>
        <div className="fixed top-[75px] left-0 h-screen z-10">
          <SideBar />
        </div>
      </div>
      <div className="flex">
        <div className="m-auto mt-32 mr-[400px] bg-gray-300">
          <div className="border shadow-xl p-8 rounded-lg  w-[800px]">
            <h2 className="text-center text-2xl font-bold mb-4">
              Create a New Post (Video)
            </h2>
            <form className="space-y-9" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <label htmlFor="caption">Caption:</label>
                <textarea
                  id="caption"
                  name="content"
                  value={post.content}
                  onChange={(e) => handleChange(e)}
                  className="w-full border-none p-2"
                />
              </div>
              <div className="flex flex-col space-y-6">
                <label htmlFor="video">Upload a video:</label>
                <input
                  type="file"
                  id="video"
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={handleFileChange}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVideos;
