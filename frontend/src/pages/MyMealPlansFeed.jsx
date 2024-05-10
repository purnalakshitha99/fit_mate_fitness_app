import React, { useEffect, useState } from "react";
import MealPlanService from "../services/MealPlanFeedServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faHeart, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import UpdateMealPlanForm from "../components/models/UpdateMealPlanForm";// Import the update form component
import axios from "axios";
import Swal from 'sweetalert2';
const MyMealPlansFeed = (props) => {
  const [mealPlans, setMealPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false); // State to control visibility of the update form
  const [selectedMealPlan, setSelectedMealPlan] = useState(null); // State to track the selected meal plan ID for update

  useEffect(() => {
    const fetchMealPlans = async () => {
      setLoading(true);
      try {
        const response = await MealPlanService.getMealPlansByUser(props.userId);
        setMealPlans(response.data);
      } catch (error) {
        console.error("Error fetching meal plans:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMealPlans();
  }, [props.userId]);

  const handleShare = (mealPlanId) => {
    console.log("Share meal plan with ID:", mealPlanId);
  };

  const handleLike = (mealPlanId) => {
    console.log("Like meal plan with ID:", mealPlanId);
  };

  const handleUpdate = (mealPlan) => {
    console.log("Update meal plan ", mealPlan);
    setSelectedMealPlan(mealPlan); 
    setShowUpdateForm(true); // Show the update form
  };

  const handleDelete = (mealPlan) => {
    // Show a confirmation dialog before deleting
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Make a DELETE request to delete the meal plan
          const response = await axios.delete(
            `http://localhost:8080/meal_plans/${mealPlan.id}`
          );
          if (response.status === 200) {
            // If deletion is successful, show success message
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Meal plan deleted successfully',
              timer: 2000
            });
            // You can update the UI by refreshing the meal plans or removing the deleted meal plan from the list
          } else {
            console.error('Failed to delete meal plan');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    });
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
                {/* Add more details about the meal plan */}
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
                    className="text-red-500 hover:text-red-700 mr-4"
                    onClick={() => handleLike(mealPlan.id)}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button
                    className="text-gray-500 hover:text-gray-700 mr-4"
                    onClick={() => handleUpdate(mealPlan)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleDelete(mealPlan)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Render the update form if showUpdateForm is true */}
      {showUpdateForm && (
        <UpdateMealPlanForm
        setShowUpdateForm={setShowUpdateForm} // Pass a function to close the update form
          mealPlan={selectedMealPlan} // Pass the selected meal plan ID to the update form
        />
      )}
    </div>
  );
};

export default MyMealPlansFeed;
