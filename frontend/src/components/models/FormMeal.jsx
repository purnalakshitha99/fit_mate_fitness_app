import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MealPlan from '../../assets/mealPlan.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useEffect } from 'react';



function FormMeal() {

  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem("user");
    
    setLoggedInUser(JSON.parse(userData));
  }, []);
  

  const [formData, setFormData] = useState({
    mealPlanType: '',
    dietaryPreferences: '',
    portionSizes: '',
    ingredients: '',
    cookingInstructions: '',
    nutritionalInformation: '',
    recipes: '',
    images: null,
    videos: null
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files || value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'images' || key === 'videos') {
            if (value) {
                for (let i = 0; i < value.length; i++) {
                    formDataToSend.append('imagePath', value[i]);
                }
            }
        } else {
            formDataToSend.append(key, value);
        }
      });
    
      const response = await axios.post(`http://localhost:8080/users/${parseInt(loggedInUser.id)}/meal_plans`, formDataToSend);
      console.log('Response:', response.data);
      setSuccessMessage('Data added successfully!');
      setErrorMessage('');
      // Display success alert using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data added successfully!'
      });
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error adding data. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[1200px]">
        <button className="text-white text-xl place-self-end">X</button>
        <div className="bg-white rounded" style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <div className="flex flex-row">
            <div className="bg-red-400">
              <img className='h-full' src={MealPlan} alt="Meal Plan" />
            </div>
            <div className="w-1/2 p-5">
              {successMessage && <div className="bg-green-200 text-green-800 p-3 mb-4">{successMessage}</div>}
              {errorMessage && <div className="bg-red-200 text-red-800 p-3 mb-4">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mealPlanType">Meal Plan Type</label>
                  <div className="relative">
                    <select
                      id="mealPlanType"
                      name="mealPlanType"
                      value={formData.mealPlanType}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="">Select meal plan type</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dietaryPreferences">Dietary Preferences</label>
                  <div className="relative">
                    <select
                      id="dietaryPreferences"
                      name="dietaryPreferences"
                      value={formData.dietaryPreferences}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="">Select dietary preferences</option>
                      <option value="vegetarian">Vegetarian</option>
                      <option value="vegan">Vegan</option>
                      <option value="keto">Keto</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portionSizes">Portion Sizes</label>
                  <div className="relative">
                    <select
                      id="portionSizes"
                      name="portionSizes"
                      value={formData.portionSizes}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    >
                      <option value="">Select portion sizes</option>
                      <option value="half">Half</option>
                      <option value="full">Full</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">Ingredients</label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cookingInstructions">Cooking Instructions</label>
                  <textarea
                    id="cookingInstructions"
                    name="cookingInstructions"
                    value={formData.cookingInstructions}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nutritionalInformation">Nutritional information</label>
                  <textarea
                    id="nutritionalInformation"
                    name="nutritionalInformation"
                    value={formData.nutritionalInformation}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipes">Recipes</label>
                  <textarea
                    id="recipes"
                    name="recipes"
                    value={formData.recipes}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">Upload Images/Videos</label>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    accept="image/*"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
               
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormMeal;
