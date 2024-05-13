import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="workout-feed w-full max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Workout Plans</h1>
      <div className="space-y-6">
        {workOutPlans.map(plan => (
          <div key={plan.id} className="workout-card bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={plan.profile_picture_url}
                alt="User profile"
              />
              <div>
                <p className="font-semibold text-lg text-gray-800">{plan.userName}</p>
                <p className="text-sm text-gray-600">Posted {plan.date}</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-xl font-semibold text-gray-800">{plan.routingName}</p>
              <p className="text-gray-700">{plan.description}</p>
            </div>
            <div className="workout-info flex justify-between items-center mb-6">
              <div className="flex flex-col space-y-2">
                <p className="text-sm text-gray-600">Exercise Name:</p>
                <p className="text-sm text-gray-600">Sets Count:</p>
                <p className="text-sm text-gray-600">Repetitions:</p>
                <p className="text-sm text-gray-600">Place:</p>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-sm text-gray-800">{plan.exerciseName}</p>
                <p className="text-sm text-gray-800">{plan.setsCount}</p>
                <p className="text-sm text-gray-800">{plan.repetitions}</p>
                <p className="text-sm text-gray-800">{plan.place}</p>
              </div>
            </div>
            <div className="long-exercise mb-6 border-t pt-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">Long Exercise</h2>
              <p className="text-gray-700">{plan.longExercise}</p>
            </div>
            <div className="flex justify-end mb-4">
              <button className="text-sm text-gray-800 hover:text-blue-500 mr-4">Like</button>
              <button className="text-sm text-gray-800 hover:text-blue-500 mr-4">Comment</button>
              <button className="text-sm text-gray-800 hover:text-blue-500">Share</button>
            </div>
            {plan.postImages && plan.postImages.length > 0 &&
              <Slider {...sliderSettings} className="mb-4">
                {plan.postImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Workout Image ${index + 1}`}
                    className="object-cover w-full h-48 rounded-lg"
                  />
                ))}
              </Slider>
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkOutPlans;
