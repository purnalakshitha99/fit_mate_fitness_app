import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import PostService from "../services/PostService";
import CommentPopup from "./CommentPopup";
import ShareService from "../services/ShareService";

const UploadedPosts = ({ loggedIn }) => {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [sharedPosts, setSharedPosts] = useState([]);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const userId = loggedIn.id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (loggedIn && loggedIn.id) {
          // Check if loggedInUser and its id are defined
          const response = await PostService.getPostByUser(loggedIn.id);
          setPosts(Array.isArray(response.data) ? response.data : []);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [loggedIn]); // Include loggedInUser in the dependency array

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ShareService.getSharePostByUser(loggedIn.id);
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleLikeClick = (index) => {
    const updatedLikedPosts = [...likedPosts];
    updatedLikedPosts[index] = !updatedLikedPosts[index];
    setLikedPosts(updatedLikedPosts);
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
                src={loggedIn.profilePictureUrl}
                alt=""
              />
              <h3 className="font-bold text-sm sm:text-base first-letter:capitalize">
                {loggedIn.firstName} {loggedIn.lastName}
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
                  onClick={() => handleLikeClick(index)}
                >
                  <img
                    className={`w-7 h-7 ${
                      likedPosts[index] ? "" : "filter invert opacity-0"
                    }`}
                    src="https://img.icons8.com/emoji/48/red-heart.png"
                    alt="red-heart"
                  />
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
      {showPopup && (
        <CommentPopup postId={selectedPostId} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default UploadedPosts;
