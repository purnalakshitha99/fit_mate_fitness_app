import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostService from "../services/PostService";
import LikeService from "../services/LikeService";
import Slider from "react-slick";

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
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [likedPosts, setLikedPosts] = useState([]);
  const [likedPostId, setLikedPostId] = useState(null);
  const [loggedIn, setLoggedIn] = useState({});
  const [refetch,setReFetch] = useState(false)

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

  const handleLikeClick = async (index, pId) => {
    try {
      const updatedLikedPosts = [...likedPosts];
      updatedLikedPosts[index] = !updatedLikedPosts[index];
      setLikedPosts(updatedLikedPosts);
      setLikedPostId(pId);

      const response = await LikeService.setLike(loggedIn.id, pId);
      setReFetch(true)
      if(response){
        console.log("res")
      }
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
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4  w-full justify-center">
                <button
                  className="w-1/2 flex justify-center p-3 border gap-5 cursor-pointer"
                  onClick={() => handleLikeClick(index, post.postId)}
                >
                  {
                    post?.likedUsers?.includes(loggedIn.id) ?  <img
                    className={`w-7 h-7`}
                    src="https://img.icons8.com/emoji/48/red-heart.png"
                    alt="red-heart"
                  /> : <img
                  className={`w-7 h-7 ${
                    likedPosts[index] ? "" : "filter invert opacity-0"
                  }`}
                  src="https://img.icons8.com/emoji/48/red-heart.png"
                  alt="red-heart"
                />
                  }
                 
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
      {/* 
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                className={`w-7 h-7 ${
                  clicked ? "" : "filter brightness-0 invert"
                }`}
                src="https://img.icons8.com/emoji/48/red-heart.png"
                alt="red-heart"
                onClick={handleClick}
              />
              <img
                className="w-6 h-6 filter brightness-0 invert"
                src="https://img.icons8.com/ios/50/000000/speech-bubble--v1.png"
                alt="speech-bubble--v1"
                onClick={handleCommnt}
              />
            </div>

            <img
              className="w-6 h-6 filter brightness-0 invert"
              src="https://img.icons8.com/ios/50/share-3.png"
              alt="share-3"
            />
          </div>
        </div> */}
      {/* {showCommentSection && ( // Render the comment section based on showCommentSection state
          <div className="w-full sm:max-w-[1000px] p-4 space-y-5 bg-white  rounded-md  m-auto">
            <div className="gap-5 flex ">
              <img
                src={Image1}
                className=" rounded-full w-10 h-10"
                alt="user photo"
              />
              Sasida Dilhan
            </div>
            <div className="rounded-lg p-2 text-black">
              {submittedValue}
              <div className=" space-x-8">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Enter your text"
                  className=" border-none"
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-36 rounded-lg  bg-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )} */}
    </div>
    // </div>
    // );
  );
};

export default Post;
