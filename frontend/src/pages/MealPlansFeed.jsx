import React, { useEffect, useState } from "react";
import MealPlanService from "../services/MealPlanFeedServices";
import Slider from "react-slick";

const MealPlan = () => {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {loading ? (
        <p>Loading meal plans...</p>
      ) : (
        <div>
          {mealPlans.map((mealPlan) => (
            <div
              className="mt-5 text-black rounded-xl bg-background space-y-10"
              key={mealPlan.id}
            >
              <div className="w-full sm:max-w-[1200px] p-4 space-y-5 bg-gray-300 rounded-md m-auto">
                <h2>{mealPlan.mealPlanType}</h2>
                <p>Dietary Preferences: {mealPlan.dietaryPreferences}</p>
                <p>Recipes: {mealPlan.recipes}</p>
                <p>Nutritional Information: {mealPlan.nutritionalInformation}</p>
                <p>Ingredients: {mealPlan.ingredients}</p>
                <p>Portion Sizes: {mealPlan.portionSizes}</p>
                <p>Cooking Instructions: {mealPlan.cookingInstructions}</p>
                <p>Creation Date: {mealPlan.creationDate}</p>
                <p>Creation Time: {mealPlan.creationTime}</p>
                {mealPlan.imagePath && (
                  <Slider {...sliderSettings}>
                    <img
                      className="p-2 max-h-[600px] max-w-full m-auto"
                      src={mealPlan.imagePath}
                      alt="Meal Plan"
                    />
                  </Slider>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealPlan;