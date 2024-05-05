import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyActivities = ({ closeMyActivities }) => {

  const [mealPlans, setMealPlans] = useState(null);
  console.log(mealPlans);

  const getMealPlans = async () => {
    try {
      const response = await axios.get('users/meal_plans');
      setMealPlans(response.data);
    } catch (error) {
      console.log('Error:', error);
    }
  }

  useEffect(() => {
    getMealPlans();
  }, [])

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[800px]'>
        <button className='text-white text-xl place-self-end' onClick={closeMyActivities}>
          X
        </button>
        <div className='bg-white p-10 rounded'>
          <h2 className="text-2xl font-bold mb-4">My Meal Plans</h2>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Recipes</th>
                <th className="px-4 py-2">Nutritional</th>
                <th className="px-4 py-2">Information</th>
                <th className="px-4 py-2">Portion Sizes</th>
                <th className="px-4 py-2">Creation Date</th>
              </tr>
            </thead>
            <tbody>
              {mealPlans && mealPlans.map((plan, index) => (
                <tr key={plan.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{plan.title}</td>
                  <td className="border px-4 py-2">{plan.description}</td>
                  <td className="border px-4 py-2">{plan.recipes}</td>
                  <td className="border px-4 py-2">{plan.nutritional}</td>
                  <td className="border px-4 py-2">{plan.information}</td>
                  <td className="border px-4 py-2">{plan.portionSizes}</td>
                  <td className="border px-4 py-2">{plan.creationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyActivities;
