import React, { useEffect, useState } from "react";
import Status from "../assets/status.jpg";

export default function GetWorkOutStatus() {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedInUser(JSON.parse(user));
  }, []);
  console.log("log", loggedInUser);
  return (
    <div className="mt-5 text-black rounded-xl bg-background space-y-10">
      <div className="w-full sm:max-w-[1200px] p-4 space-y-5 bg-gray-300 rounded-md m-auto">
        <div className=" flex flex-row gap-x-5">
          <img
            className=" w-[40px] h-[40px] rounded-full"
            src={loggedInUser.profilePictureUrl}
          />
          <div className=" text-xl font-bold">
            {loggedInUser.firstName} {loggedInUser.lastName}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center juc space-y-3 sm:space-y-0 sm:space-x-3">
          <div className="flex flex-row">
            <div className="w-1/2 h-full">
              <img src={Status} />
            </div>
            <div className="w-1/2 p-5">
              <div>
                <h2 className="text-gray-700 text-3xl font-bold flex justify-center mb-5">
                  Workout Details
                </h2>
                <div className=" flex flex-row ">
                  <div className="mx-3 mb-4 w-full">
                    <h3 className="text-lg font-semibold text-blue-700">
                      Duration:
                    </h3>
                    <div className="bg-gray-200 px-3 py-2 rounded-md">
                      <p className="text-gray-800">60 minutes</p>
                    </div>
                  </div>
                  <div className="mx-3 mb-4 w-full">
                    <h3 className="text-lg font-semibold text-blue-700">
                      Distance:
                    </h3>
                    <div className="bg-gray-200 px-3 py-2 rounded-md">
                      <p className="text-gray-800">5 miles</p>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row">
                  <div className="mx-3 mb-4 w-full">
                    <h3 className="text-lg font-semibold text-blue-700">
                      Weight Lifted:
                    </h3>
                    <div className="bg-gray-200 px-3 py-2 rounded-md">
                      <p className="text-gray-800">100 kg</p>
                    </div>
                  </div>
                  <div className="mx-3 mb-4 w-full">
                    <h3 className="text-lg font-semibold text-blue-700">
                      Calories Burned:
                    </h3>
                    <div className="bg-gray-200 px-3 py-2 rounded-md">
                      <p className="text-gray-800">500 kcal</p>
                    </div>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">
                    Number Of Pushups:
                  </h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">50</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">
                    Load/Resistance:
                  </h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">Heavy</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Date:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">2024-05-06</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">
                    Description:
                  </h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus volutpat, odio eget scelerisque lacinia, ante
                      nisi rhoncus lacus, ac rutrum eros leo sed leo. Proin non
                      odio vitae sem congue volutpat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4  w-full justify-center">
            <button
              className="w-1/2 flex justify-center p-3 border gap-5 cursor-pointer"
              // onClick={() => handleLikeClick(index, post.postId)}
            >
              <img
                className={`w-7 h-7`}
                src="https://img.icons8.com/emoji/48/red-heart.png"
                alt="red-heart"
              />
              Like
            </button>
            <div
              className="w-1/2 flex flex-row justify-center gap-5 p-3 border cursor-pointer"
              // onClick={() => handleOpenPopup(post.postId)}
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
              // onClick={() => handleOpenPopup(post.postId)}
            >
              <button>
                <img
                  className="w-6 h-6 filter"
                  src="https://img.icons8.com/ios/50/share-3.png"
                  alt="share-3"
                  // onClick={() => {
                  //   setShareModel(true);
                  //   setSharePostId(post.postId);
                  // }}
                />
              </button>
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
