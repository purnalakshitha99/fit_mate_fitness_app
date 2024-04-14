import React, { useState } from "react";
import Image1 from "../assets/gym1.webp";

const Post = () => {
    const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  };
  return (
    <div className="mt-5 text-white rounded-xl bg-background">
      <div className="w-full sm:w-[1000px] p-4 space-y-5">
        <div className="flex flex-row items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <h3 className="font-bold text-sm sm:text-base">Sasida Dilhan</h3>
        </div>
        <p className="text-xs sm:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img className="p-2" src={Image1} alt="Gym" />
        <div className="flex items-center space-x-8">
          <img
            className={`w-8 h-8 ${clicked ? 'blue-filter' : 'filter brightness-0 invert'}`}
            src="https://img.icons8.com/ios/50/facebook-like--v1.png"
            alt="facebook-like--v1"
            onClick={handleClick}
          />

          <img
            className="w-8 h-8 filter brightness-0 invert"
            src="https://img.icons8.com/ios/50/000000/speech-bubble--v1.png"
            alt="speech-bubble--v1"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
