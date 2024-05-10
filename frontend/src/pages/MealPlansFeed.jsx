import React, { useEffect, useState } from "react";
import MealPlanService from "../services/MealPlanFeedServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faHeart } from "@fortawesome/free-solid-svg-icons";

const MealPlan = (props) => {
  const [mealPlans, setMealPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealPlans = async () => {
      setLoading(true);
      try {
        const response = await MealPlanService.getMealPlans(); // Assume this function fetches meal plans from the specified endpoint


       
        setMealPlans(response.data);
      } catch (error) {
        console.error("Error fetching meal plans:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMealPlans();
  }, []);



  const handleShare = (mealPlanId) => {
    // Add your share functionality here
    console.log("Share meal plan with ID:", mealPlanId);
  };

  const handleLike = (mealPlanId) => {
    // Add your like functionality here
    console.log("Like meal plan with ID:", mealPlanId);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-serif">
      {loading ? (
        <p className="text-center text-lg font-semibold">Loading meal plans...</p>
      ) : (
        <div>
          {mealPlans.map((mealPlan) => (
            <div
              key={mealPlan.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 relative"
            >
              {mealPlan.imagePath && (
                <img
                  className="w-full h-64 object-cover object-center"
                  src={mealPlan.imagePath}
                  alt="Meal Plan"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{mealPlan.mealPlanType}</h2>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Dietary Preferences:</span>{" "}
                  {mealPlan.dietaryPreferences}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Recipes:</span> {mealPlan.recipes}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Nutritional Information:</span>{" "}
                  {mealPlan.nutritionalInformation}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Ingredients:</span> {mealPlan.ingredients}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Portion Sizes:</span>{" "}
                  {mealPlan.portionSizes}
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Cooking Instructions:</span>{" "}
                  {mealPlan.cookingInstructions}
                </p>
                <div className="flex justify-between items-center absolute bottom-0 right-0 p-4">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-4"
                    onClick={() => handleShare(mealPlan.id)}
                  >
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleLike(mealPlan.id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealPlan;
