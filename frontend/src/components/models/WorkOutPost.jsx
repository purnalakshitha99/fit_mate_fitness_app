import React from "react";
import BackImage from "../../assets/back.jpg";
import Chest from "../../assets/chest.jpg";
import Arms from "../../assets/twoarms.jpg";
import Legs from "../../assets/legs.jpg";
import { Link } from "react-router-dom";

const WorkOutPost = ({ closeWorkOutPost }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[1100px]">
        <button
          className="text-white text-xl place-self-end"
          onClick={closeWorkOutPost}
        >
          X
        </button>
        <div className="bg-white p-10 rounded m-auto ">
          <div class="grid grid-cols-4 gap-4  w-[1000px] h-[200px] text-lg font-medium">
            <Link to="/workoutform">
              <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
                <img src={BackImage} className="rounded-t-xl mb-3" />
                Back
              </div>
            </Link>
            <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
              <img src={Chest} className="rounded-t-xl mb-3" />
              Chest
            </div>
            <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
              <img src={Arms} className="rounded-t-xl mb-3 " />
              Arms
            </div>
            <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
              <img src={Legs} className="rounded-t-xl mb-3 " />
              Legs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOutPost;
