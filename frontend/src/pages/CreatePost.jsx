import React, { useEffect, useState } from "react";

import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { app } from "../config/Config";
import toast from "react-hot-toast";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { fas } from "@fortawesome/free-solid-svg-icons";
import HashLoader from "react-spinners/HashLoader";

const storage = getStorage(app);

const CreatePost = () => {
  const [loggedIn, setLoggedIn] = useState({});
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [post, setPost] = useState({
    content: "",
    imageUrls: [],
  });
  const [error, setError] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (post.content.trim() === "") {
      toast.error("Post content cannot be empty");
      return;
    }

    const files = e.target.photo.files;

    if (files.length === 0) {
      toast.error("Please select at least one image");
      return;
    }
    if (files.length > 3) {
      toast.error("Please select only up to 3 images");
      return;
    }

    const imageUrls = [];
    for (const file of e.target.photo.files) {
      const imageRef = ref(storage, `/images/${file.name}`);
      await uploadBytes(imageRef, file);

      const imageUrl = await getDownloadURL(imageRef);
      imageUrls.push(imageUrl);
    }

    const postData = {
      ...post,
      imageUrls: imageUrls,
    };

    UserService.savePost(postData, loggedIn.id)
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((error) => {
        console.log("error");
      });
    setLoading(false);
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
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 opacity-75 z-50">
          <HashLoader color={"#ffffff"} loading={loading} size={100} />
        </div>
      ) : null}
      <div className="flex">
        <div className="m-auto mt-32 mr-[400px] bg-gray-300">
          <div className="border shadow-xl p-8 rounded-lg  w-[800px] ">
            <h2 className="text-center text-2xl font-bold mb-4">
              Create a New Post(Photo)
            </h2>
            <form className="space-y-9" onSubmit={handleSubmit}>
              <div className=" flex flex-row space-x-4">
                <img
                  src={loggedIn.profilePictureUrl}
                  className=" w-[50px] h-[50px] rounded-full"
                />
                <p>
                  {loggedIn.firstName} {loggedIn.lastName}
                </p>
              </div>
              <div className="space-y-3">
                <label htmlFor="caption">Caption:</label>
                <textarea
                  id="caption"
                  name="content"
                  onChange={(e) => handleChange(e)}
                  className="w-full border-none p-2"
                />
              </div>
              <div className="flex flex-col space-y-6">
                <label htmlFor="photo">Upload photos:</label>
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  multiple // Allow multiple file selection
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
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

export default CreatePost;
