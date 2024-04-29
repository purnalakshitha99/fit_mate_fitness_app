import React, { useState } from 'react';
import axios from 'axios';

const MealPlan = ({ closeMealPlan }) => {
  const [formData, setFormData] = useState({
    title: 'halo',
    description: '',
    recipes: '',
    nutritional: '',
    information: '',
    portionSizes: 0,
    creationDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const userid = 5;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/users/${userid}/meal_plans`, formData);
      console.log('Response:', response.data);
      
      // Close modal or do any other necessary action
      closeMealPlan();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px]'>
        <button className='text-white text-xl place-self-end' onClick={closeMealPlan}>
          X
        </button>
        <div className='bg-white p-10 rounded' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipes">
                Recipes
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="recipes"
                type="text"
                name="recipes"
                value={formData.recipes}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nutritional">
                Nutritional
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nutritional"
                type="text"
                name="nutritional"
                value={formData.nutritional}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="information">
                Information
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="information"
                type="text"
                name="information"
                value={formData.information}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portionSizes">
                Portion Sizes
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="portionSizes"
                type="number"
                name="portionSizes"
                value={formData.portionSizes}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creationDate">
                Creation Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="creationDate"
                type="date"
                name="creationDate"
                value={formData.creationDate}
                onChange={handleChange}
                required
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
  );
};

export default MealPlan;
