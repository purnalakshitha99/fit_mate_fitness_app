import React, { useState } from "react";
import BackImage from "../../assets/back.jpg";
import Chest from "../../assets/chest.jpg";
import Arms from "../../assets/twoarms.jpg";
import Legs from "../../assets/legs.jpg";
import WorkoutPlanForm from "../../pages/WorkoutPlanForm";

const WorkOutPost = ({ closeWorkOutPost }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to open model
  const openModel = (category) => {
    setSelectedCategory(category);
  };

  // Function to close model
  const closeModel = () => {
    setSelectedCategory(null);
  };

  // Render the appropriate modal based on the selected category
  const renderModal = () => {
    switch (selectedCategory) {
      case "Back":
        return <WorkoutPlanForm closeModel={closeModel} />;
      // case "Chest":
      //   return <ChestModel closeModel={closeModel} />;
      // case "Arms":
      //   return <ArmsModel closeModel={closeModel} />;
      // case "Legs":
      //   return <LegsModel closeModel={closeModel} />;
      default:
        return null;
    }
  };

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
            <div onClick={() => openModel("Back")}>
              <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
                <img src={BackImage} className="rounded-t-xl mb-3" />
                Back
              </div>
            </div>
            <div onClick={() => openModel("Chest")}>
              <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
                <img src={Chest} className="rounded-t-xl mb-3" />
                Chest
              </div>
            </div>
            <div onClick={() => openModel("Arms")}>
              <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
                <img src={Arms} className="rounded-t-xl mb-3 " />
                Arms
              </div>
            </div>
            <div onClick={() => openModel("Legs")}>
              <div class="bg-gray-200  h-full text-center hover:bg-background cursor-pointer hover:text-white rounded-xl">
                <img src={Legs} className="rounded-t-xl mb-3 " />
                Legs
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedCategory && renderModal()}
    </div>
  );
};

export default WorkOutPost;
