import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WorkOutPlans() {
  const [workOutPlans, setWorkOutPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/work_out_plans');
        setWorkOutPlans(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Workout Plans</h1>
      <div className="space-y-4">
        {workOutPlans.map(plan => (
          <div key={plan.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-start">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="profile_picture_url"
                alt="User profile"
              />
              <div className="flex flex-col">
                <p className="font-semibold text-lg">User Name</p>
                <p className="text-gray-500 text-sm">Posted {plan.date}</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold">{plan.routingName}</p>
              <p className="text-gray-700">{plan.description}</p>
            </div>
            {/* Additional information about the workout plan */}
            <div className="flex justify-between items-center mt-2 mx-40">
              <div className="flex flex-col space-y-2"> {/* Reduced space between columns */}
                <p className="text-gray-700 text-sm">Exercise Name:</p>
                <p className="text-gray-700 text-sm">Sets Count:</p>
                <p className="text-gray-700 text-sm">Repetitions:</p>
                <p className="text-gray-700 text-sm">Place:</p>
              </div>
              <div className="flex flex-col space-y-2"> {/* Reduced space between columns */}
                <p className="text-gray-700 text-sm">{plan.exerciseName}</p>
                <p className="text-gray-700 text-sm">{plan.setsCount}</p>
                <p className="text-gray-700 text-sm">{plan.repetitions}</p>
                <p className="text-gray-700 text-sm">{plan.place}</p>
              </div>
            </div>
            {/* Like, Comment, Share buttons */}
            <div className="flex justify-end mt-2">
              <button className="text-gray-700 hover:text-blue-500 text-sm">Like</button>
              <button className="text-gray-700 hover:text-blue-500 text-sm">Comment</button>
              <button className="text-gray-700 hover:text-blue-500 text-sm">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkOutPlans;
