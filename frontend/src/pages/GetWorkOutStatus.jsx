import React from 'react';
import Status from "../assets/status.jpg"

export default function GetWorkOutStatus() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[1200px]">
        <div className="bg-white rounded" style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <div className="flex flex-row">
            <div className="bg-red-400 w-1/2">
            <img src={Status } />
            </div>
            <div className="w-1/2 p-5">
              <div>
                <h2 className="text-gray-700 text-3xl font-bold flex justify-center mb-5">Workout Details</h2>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Duration:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">60 minutes</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Distance:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">5 miles</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Weight Lifted:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">100 kg</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Calories Burned:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">500 kcal</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Number Of Pushups:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">50</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Load/Resistance:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">Heavy</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Date:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">2024-05-06</p>
                  </div>
                </div>
                <div className="mx-3 mb-4">
                  <h3 className="text-lg font-semibold text-blue-700">Description:</h3>
                  <div className="bg-gray-200 px-3 py-2 rounded-md">
                    <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat, odio eget scelerisque lacinia, ante nisi rhoncus lacus, ac rutrum eros leo sed leo. Proin non odio vitae sem congue volutpat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
