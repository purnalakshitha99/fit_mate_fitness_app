import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import WorkOutPlanAPIS from "../apis/modules/WorkOutPlanAPIS";
import WorkOutPlanImage from "../assets/work_out.jpg"
import Swal from 'sweetalert2';

const WorkoutPlanForm = ({ closeModel }) => {
  const [routingName, setRoutingName] = useState("");
  const [excersiceName, setExcersiceName] = useState("");
  const [count, setCount] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [Repetitions, setRepetitions] = useState("");

  const formData = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const payload = {
      routingName: routingName,
      exerciseName: excersiceName,
      setsCount: count,
      date: date,
      place: place,
      description: description,
      repetitions: Repetitions
    };
    console.log(payload);
    const results = await WorkOutPlanAPIS.createWorkOutPlan(user.id, payload);
    console.log(results);

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Data added successfully!'
    });

    closeModel()
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">

<div className='w-[1200px]'>
        <button className='text-white text-xl place-self-end' onClick={closeModel}>X</button>
        <div className='bg-white rounded' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <div className='flex flex-row'>
            
        {/* <div> */}
          <img className='object-cover' style={{ width: '50%', height: '100%' }} src={WorkOutPlanImage} alt='Meal Plan' />
        {/* </div> */}
        <div className="bg-white rounded-lg shadow-xl p-8 ">
          <h2 className="text-2xl font-bold mb-6">Share your Workout Plan</h2>
          <form onSubmit={formData}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Routine Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Routine Name"
                onChange={(e) => setRoutingName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Exercise Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Exercise Name"
                onChange={(e) => setExcersiceName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Sets Count
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Sets Count"
                onChange={(e) => setCount(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Repetitions
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Repetitions"
                onChange={(e) => setRepetitions(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Place
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Place"
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
              <button
                type="button"
                className="bg-red-500 ml-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={closeModel}
              >
                close
              </button>
            </div>
          </form>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanForm;
