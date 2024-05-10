import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import PostService from "../services/PostService";
import CommentPopup from "./CommentPopup";
import LikeService from "../services/LikeService";
import toast from "react-hot-toast";

const FriendsPosts = ({ loggedIn }) => {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likedPostId, setLikedPostId] = useState(null);
  const [refetch, setReFetch] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(userData));
  }, []);

  const userId = loggedIn;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (userId) {
          // Check if loggedInUser and its id are defined
          const response = await PostService.getPostByUser(userId);
          setPosts(Array.isArray(response.data) ? response.data : []);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]); // Include loggedInUser in the dependency array

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleLikeClick = async (index, pId) => {
    try {
      const updatedLikedPosts = [...likedPosts];
      updatedLikedPosts[index] = !updatedLikedPosts[index];
      setLikedPosts(updatedLikedPosts);
      setLikedPostId(pId);

      const response = await LikeService.setLike(loggedInUser.id, pId);
      toast.success(response.data);
      setReFetch(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenPopup = (postId) => {
    setSelectedPostId(postId);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedPostId(null);
  };

  return (
    <div>
      {posts?.map((post, index) => (
        <div
          className=" mb-10 mt-24 text-black rounded-xl bg-background space-y-10"
          key={index}
        >
          <div className="w-full sm:max-w-[1000px] p-4 space-y-5 bg-gray-300 rounded-md m-auto">
            <div className="flex flex-col sm:flex-row items-center juc space-y-3 sm:space-y-0 sm:space-x-3">
              <img
                className="h-10 w-10 rounded-full"
                src={post.user.profilePictureUrl}
                alt=""
              />
              <h3 className="font-bold text-sm sm:text-base first-letter:capitalize">
                {userId.firstName} {userId.lastName}
              </h3>
            </div>
            <div>
              <h2>{post.content}</h2>
            </div>
            {post.postImages && post.postImages.length > 1 ? (
              <Slider {...sliderSettings}>
                {post.postImages.map((media, index) => (
                  <img
                    className="p-2 w-fit h-[600px] m-auto+
                    "
                    src={media}
                    alt="Gym"
                    key={index}
                  />
                ))}
              </Slider>
            ) : post.postImages && post.postImages.length === 1 ? (
              <img
                className="p-2 w-fit h-[600px] m-auto"
                src={post.postImages[0]}
                alt="Gym"
              />
            ) : null}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4  w-full justify-center">
                <button
                  className="w-1/2 flex justify-center p-3 border gap-5 cursor-pointer"
                  onClick={() => handleLikeClick(index, post.postId)}
                >
                  {post?.likedUsers?.includes(loggedInUser.id) ? (
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
              </div>
            </div>
          </div>
        </div>
      ))}
      {showPopup && (
        <CommentPopup postId={selectedPostId} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default FriendsPosts;
