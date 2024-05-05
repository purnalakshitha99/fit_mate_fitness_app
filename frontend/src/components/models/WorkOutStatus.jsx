import React, { useState } from 'react';

const WorkOutStatus = ({ closeWorkOutStatus }) => {
  const [exerciseType, setExerciseType] = useState('cardio'); // Default exercise type

  // Function to handle exercise type change
  const handleExerciseTypeChange = (type) => {
    setExerciseType(type);
  };

  // Function to get image URL based on exercise type
  const getImageUrl = () => {
    switch (exerciseType) {
      case 'cardio':
        return 'cardio_image_url.jpg'; // Replace with actual URL for cardio image
      case 'strength':
        return 'strength_image_url.jpg'; // Replace with actual URL for strength image
      // Add cases for other exercise types
      default:
        return '';
    }
  };

  // Function to render related entities based on exercise type
  const renderRelatedEntities = () => {
    switch (exerciseType) {
      case 'cardio':
        return (
          <div>
            {/* Input fields for running, cycling, swimming, etc. */}
            <label className='block mt-4'>
              <span className='text-gray-700'>Running Distance (miles)</span>
              <input type='number' className='form-input mt-1 block w-full' />
            </label>
            <label className='block mt-4'>
              <span className='text-gray-700'>Running Time (minutes)</span>
              <input type='number' className='form-input mt-1 block w-full' />
            </label>
            {/* Add more input fields for cardio exercises */}
          </div>
        );
      case 'strength':
        return (
          <div>
            {/* Input fields for weightlifting, bodyweight exercises, etc. */}
            <label className='block mt-4'>
              <span className='text-gray-700'>Weight Lifted (lbs)</span>
              <input type='number' className='form-input mt-1 block w-full' />
            </label>
            {/* Add more input fields for strength exercises */}
          </div>
        );
      // Add cases for other exercise types
      default:
        return null;
    }
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] bg-blue-200 rounded-lg overflow-hidden'>
        <button className='text-white text-xl place-self-end' onClick={closeWorkOutStatus}>
          X
        </button>
        <div className='bg-white p-10 rounded' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                name="title"
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

export default WorkOutStatus;
