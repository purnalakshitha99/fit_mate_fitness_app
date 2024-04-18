import React, { useState } from "react";
import Image1 from "../assets/gym1.webp";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

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

  return (
    <div>
      <div className="mt-32 text-white rounded-xl bg-background space-y-10 ">
        <div className="w-full sm:max-w-[1000px] p-4 space-y-5 bg-background  rounded-md m-auto">
          <div className="flex flex-col sm:flex-row items-center juc space-y-3 sm:space-y-0 sm:space-x-3">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <h3 className="font-bold text-sm sm:text-base">Sasida Dilhan</h3>
          </div>
          <p className="text-xs sm:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <img className="p-2 m-auto" src={Image1} alt="Gym" />
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
        </div>

        {showCommentSection && ( // Render the comment section based on showCommentSection state
          <div className="w-full sm:max-w-[1000px] p-4 space-y-5  rounded-md  m-auto">
            <div className="gap-5 flex ">
              <img
                src={Image1}
                className=" rounded-full w-10 h-10"
                alt="user photo"
              />
              Sasida Dilhan
            </div>
            <div className="rounded-lg p-2">
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
        )}
      </div>
    </div>
  );
};

export default Post;
