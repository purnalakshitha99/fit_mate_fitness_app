import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Swal from 'sweetalert2';


function UpdateMealPlanForm({ setShowUpdateForm, mealPlan }) {

const [ image , setImage ] = useState(null);

  // Initialize state variable to hold form data
  const [formData, setFormData] = useState({
    mealPlanType: mealPlan.mealPlanType,
    dietaryPreferences: mealPlan.dietaryPreferences,
    portionSizes: mealPlan.portionSizes,
    ingredients: mealPlan.ingredients,
    cookingInstructions: mealPlan.cookingInstructions,
    nutritionalInformation: mealPlan.nutritionalInformation,
    recipes: mealPlan.recipes,
    imagePath: '', 
  });

  // Handle changes in form fields
const handleChange = (e) => {
    const { name, value } = e.target;
    // Update formData state immutably
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle file selection for image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        setFormData({
          ...formData,imagePath: file})
      console.log(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("vade hari",formData);
    try {
      const response = await axios.put(`http://localhost:8080/meal_plans/${mealPlan.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Meal plan updated successfully',
          timer: 2000})
        console.log('Meal plan updated successfully');
        // Handle success, e.g., show a success message or redirect
      } else {
        console.error('Failed to update meal plan');
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[1200px] z-[5000]'>
        <div className='bg-white rounded' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className='flex flex-row'>
            <div className='bg-red-400'>
              <img className='' src={mealPlan.imagePath} alt='Meal Plan' />
            </div>
            <div className='w-1/2 p-5'>
              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='mealPlanType'>Meal Plan Type</label>
                  <div className='relative'>
                    <select
                      id='mealPlanType'
                      name='mealPlanType'
                      value={formData.mealPlanType}
                      onChange={handleChange}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      required
                    >
                      <option value=''>Select meal plan type</option>
                      <option value='breakfast'>Breakfast</option>
                      <option value='lunch'>Lunch</option>
                      <option value='dinner'>Dinner</option>
                    </select>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                      <FontAwesomeIcon icon={faChevronDown} className='text-gray-600' />
                    </div>
                  </div>
                </div>
                <div className='mb-4 relative'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='dietaryPreferences'>Dietary Preferences</label>
                  <div className='relative'>
                    <select
                      id='dietaryPreferences'
                      name='dietaryPreferences'
                      value={formData.dietaryPreferences}
                      onChange={handleChange}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      required
                    >
                      <option value=''>Select dietary preferences</option>
                      <option value='vegetarian'>Vegetarian</option>
                      <option value='vegan'>Vegan</option>
                      <option value='keto'>Keto</option>
                    </select>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                      <FontAwesomeIcon icon={faChevronDown} className='text-gray-600' />
                    </div>
                  </div>
                </div>
                <div className='mb-4 relative'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='portionSizes'>Portion Sizes</label>
                  <div className='relative'>
                    <select
                      id='portionSizes'
                      name='portionSizes'
                      value={formData.portionSizes}
                      onChange={handleChange}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      required
                    >
                      <option value=''>Select portion sizes</option>
                      <option value='half'>Half</option>
                      <option value='full'>Full</option>
                    </select>
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                      <FontAwesomeIcon icon={faChevronDown} className='text-gray-600' />
                    </div>
                  </div>
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='ingredients'>Ingredients</label>
                  <textarea
                    id='ingredients'
                    name='ingredients'
                    value={formData.ingredients}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='cookingInstructions'>Cooking Instructions</label>
                  <textarea
                    id='cookingInstructions'
                    name='cookingInstructions'
                    value={formData.cookingInstructions}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='nutritionalInformation'>Nutritional information</label>
                  <textarea
                    id='nutritionalInformation'
                    name='nutritionalInformation'
                    value={formData.nutritionalInformation}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='recipes'>Recipes</label>
                  <textarea
                    id='recipes'
                    name='recipes'
                    value={formData.recipes}
                    onChange={handleChange}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='images'>Upload Images/Videos</label>
                  <input
                    type='file'
                    id='images'
                    name='images'
                    onChange={handleImageChange} // Handle image file selection
                    accept='image/*'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Submit
                </button>
                <button
                  type='button'
                  className='bg-red-500 ml-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  onClick={() => setShowUpdateForm(false)}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default UpdateMealPlanForm;
