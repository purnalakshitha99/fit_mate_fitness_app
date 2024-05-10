import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostService from "../services/PostService";
import LikeService from "../services/LikeService";
import Slider from "react-slick";
import ShareService from "../services/ShareService";
import toast from "react-hot-toast";
import CommentPopup from "./CommentPopup";

const Post = () => {
  const [clicked, setClicked] = useState(false);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleCommnt = () => {
    setShowCommentSection(!showCommentSection);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedValue(inputValue);

    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [sharedPosts, setSharedPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likedPostId, setLikedPostId] = useState(null);
  const [loggedIn, setLoggedIn] = useState({});
  const [refetch, setReFetch] = useState(false);
  const [shareModel, setShareModel] = useState(false);

  const [shareDescription, setShareDescription] = useState("");
  const [sharePostId, setSharePostId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await PostService.getPost();
        if (Array.isArray(response.data)) {
          setPosts(response.data);
          setLikedPosts(response.data.map(() => false));
        } else {
          console.error("Response data is not an array:", response);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [refetch]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ShareService.getSharedPost();
        if (Array.isArray(response.data)) {
          setSharedPosts(response.data);
        } else {
          console.error("Response data is not an array:", response);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setLoggedIn(JSON.parse(userData));
  }, []);
  console.log(loggedIn.id);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleOpenPopup = (postId) => {
    setSelectedPostId(postId);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedPostId(null);
  };

  const handleShare = async (e) => {
    e.preventDefault();
    const sharePost = {
      userId: loggedIn.id,
      postId: sharePostId,
      content: shareDescription,
    };
    const response = await ShareService.sharePost(sharePost);
    if (response) {
      toast.success("shared");
      setShareModel(false);
    }
  };

  const handleLikeClick = async (index, pId) => {
    try {
      const updatedLikedPosts = [...likedPosts];
      updatedLikedPosts[index] = !updatedLikedPosts[index];
      setLikedPosts(updatedLikedPosts);
      setLikedPostId(pId);

      const response = await LikeService.setLike(loggedIn.id, pId);
      setReFetch(true);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <div className=" text-white rounded-xl mb-10 bg-background space-y-10 ">
        <div className="w-full sm:max-w-[1000px] p-4 space-y-5 bg-background  rounded-md m-auto"> */}
      {posts?.map((post, index) => (
        <div
          className="mt-5 text-black rounded-xl bg-background space-y-10"
          key={index}
        >
          <div className="w-full sm:max-w-[1200px] p-4 space-y-5 bg-gray-300 rounded-md m-auto">
            <div className="flex flex-col sm:flex-row items-center juc space-y-3 sm:space-y-0 sm:space-x-3">
              <img
                className="h-10 w-10 rounded-full"
                src={post.user.profilePictureUrl}
                alt=""
              />
              <h3 className="font-bold text-sm sm:text-base first-letter:capitalize">
                {post.user.firstName} {post.user.lastName}
              </h3>
            </div>
            <div>
              <h2>{post.content}</h2>
            </div>
            {post.postImages && post.postImages.length > 1 ? (
              <Slider {...sliderSettings}>
                {post.postImages.map((media, index) => (
                  <img
                    className="p-2 max-h-[600px] max-w-full m-auto"
                    src={media}
                    alt="Gym"
                    key={index}
                  />
                ))}
              </Slider>
            ) : post.postImages && post.postImages.length === 1 ? (
              <img
                className="p-2 w-full h-[600px] m-auto"
                src={post.postImages[0]}
                alt="Gym"
              />
            ) : null}
            {post.videoUrl && (
              <video
                controls
                className="p-2 w-full h-[600px] m-auto"
                key={index}
              >
                <source src={post.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4  w-full justify-center">
                <button
                  className="w-1/2 flex justify-center p-3 border gap-5 cursor-pointer"
                  onClick={() => handleLikeClick(index, post.postId)}
                >
                  {post.likeCount}
                  {post?.likedUsers?.includes(loggedIn.id) ? (
                    <img
                      className={`w-7 h-7`}
                      src="https://img.icons8.com/emoji/48/red-heart.png"
                      alt="red-heart"
                    />
                  ) : (
                    <img
                      className={`w-7 h-7 ${
                        likedPosts[index] ? "" : "filter invert opacity-0"
                      }`}
                      src="https://img.icons8.com/emoji/48/red-heart.png"
                      alt="red-heart"
                    />
                  )}
                  Like
                </button>
                <div
                  className="w-1/2 flex flex-row justify-center gap-5 p-3 border cursor-pointer"
                  onClick={() => handleOpenPopup(post.postId)}
                >
                  <button>
                    <img
                      className="w-6 h-6 filter"
                      src="https://img.icons8.com/ios/50/000000/speech-bubble--v1.png"
                      alt="speech-bubble--v1"
                    />
                  </button>
                  Comment
                </div>
                <div
                  className="w-1/2 flex flex-row justify-center gap-5 p-3 border cursor-pointer"
                  onClick={() => handleOpenPopup(post.postId)}
                >
                  <button>
                    <img
                      className="w-6 h-6 filter"
                      src="https://img.icons8.com/ios/50/share-3.png"
                      alt="share-3"
                      onClick={() => {
                        setShareModel(true);
                        setSharePostId(post.postId);
                      }}
                    />
                  </button>
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {sharedPosts?.map((sharepost, index) => (
        <div
          className="mt-5 text-black rounded-xl bg-background space-y-10"
          key={index}
        >
          <div className="w-full sm:max-w-[1200px] p-4 space-y-5 bg-gray-300 rounded-md m-auto">
            <div className="flex flex-col sm:flex-row items-center juc space-y-3 sm:space-y-0 sm:space-x-3">
              <img
                className="h-10 w-10 rounded-full"
                src={sharepost.user.profilePictureUrl}
                alt=""
              />
              <h3 className="font-bold text-sm sm:text-base first-letter:capitalize">
                {sharepost.user.firstName} {sharepost.user.lastName}
              </h3>
            </div>
            <h2>{sharepost.content}</h2>
            <div className=" border p-4 rounded-lg border-black">
              <img
                className="h-10 w-10 rounded-full"
                src={sharepost.post.user.profilePictureUrl}
                alt=""
              />
              <h2>{sharepost.post.content}</h2>

              {sharepost.post.postImages &&
              sharepost.post.postImages.length > 1 ? (
                <Slider {...sliderSettings}>
                  {sharepost.post.postImages.map((media, index) => (
                    <img
                      className="p-2 max-h-[600px] max-w-full m-auto"
                      src={media}
                      alt="Gym"
                      key={index}
                    />
                  ))}
                </Slider>
              ) : sharepost.post.postImages &&
                sharepost.post.postImages.length === 1 ? (
                <img
                  className="p-2 w-full h-[600px] m-auto"
                  src={sharepost.post.postImages[0]}
                  alt="Gym"
                />
              ) : null}
            </div>
          </div>
        </div>
      ))}

      {shareModel && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[550px] h-[300px] px-10 justify-between py-10">
                <div className="text-center font-bold text-xl flex justify-between ">
                  <h1 className="text-blue-800">Share</h1>
                  <img
                    width="48"
                    height="48"
                    onClick={() => setShareModel(false)}
                    src="https://img.icons8.com/color/48/delete-sign--v1.png"
                    alt="delete-sign--v1"
                  />
                </div>
                <form className="flex flex-col" onSubmit={handleShare}>
                  <textarea
                    className="border h-32 p-2"
                    placeholder="Write something"
                    onChange={(e) => setShareDescription(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white mt-4 h-8"
                  >
                    Share
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      {showPopup && (
        <CommentPopup postId={selectedPostId} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default Post;
