import React, { useEffect, useState } from "react";
import Status from "../../assets/status.jpg";

import { useNavigate } from "react-router-dom";
import StatusService from "../../services/StatusService";

export default function LoggedInUserStatus({ userId }) {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StatusService.getByStatusId(userId);
        setLoggedInUser(response.data);
        // console.log(response);
      } catch (error) {}
    };
    fetchData();
  }, []);

  console.log("logged in user: ", userId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await StatusService.getByUserId(userId);
        if (Array.isArray(response.data)) {
          setStatus(response.data);
          console.log("status", response);
        } else {
          console.error("Response data is not an array:", response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [userId]);

  const navigate = useNavigate();
  const handlenavigate = (e, id) => {
    e.preventDefault();
    navigate(`/editStatus/${id}`);
  };
  return (
    <>
      {status?.map((stat, index) => (
        <div
          className="mt-5 text-black rounded-xl bg-background space-y-10 hover:cursor-pointer"
          key={index}
          onClick={(e, id) => handlenavigate(e, stat.id)}
        >
          <div className="w-full sm:max-w-[1200px] p-4 space-y-5 bg-gray-300 rounded-md m-auto">
            <div className=" flex flex-row gap-x-5">
              <img
                className=" w-[40px] h-[40px] rounded-full"
                src={loggedInUser.profilePictureUrl}
              />
              <div className=" text-xl font-bold">
                {loggedInUser.firstName} {loggedInUser.lastName}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center juc space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="flex flex-row">
                <div className="w-1/2 h-full">
                  <img src={Status} />
                </div>
                <div className="w-1/2 p-5">
                  <div>
                    <h2 className="text-gray-700 text-3xl font-bold flex justify-center mb-5">
                      Workout Details
                    </h2>
                    <div className=" flex flex-row ">
                      <div className="mx-3 mb-4 w-full">
                        <h3 className="text-lg font-semibold text-blue-700">
                          Duration:
                        </h3>
                        <div className="bg-gray-200 px-3 py-2 rounded-md">
                          <span className="text-gray-800">
                            {stat.duration} minutes
                          </span>
                        </div>
                      </div>
                      <div className="mx-3 mb-4 w-full">
                        <h3 className="text-lg font-semibold text-blue-700">
                          Distance:
                        </h3>
                        <div className="bg-gray-200 px-3 py-2 rounded-md">
                          <span className="text-gray-800">
                            {stat.distance} miles
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" flex flex-row">
                      <div className="mx-3 mb-4 w-full">
                        <h3 className="text-lg font-semibold text-blue-700">
                          Weight Lifted:
                        </h3>
                        <div className="bg-gray-200 px-3 py-2 rounded-md">
                          <span className="text-gray-800">
                            {stat.weightLifted} kg
                          </span>
                        </div>
                      </div>
                      <div className="mx-3 mb-4 w-full">
                        <h3 className="text-lg font-semibold text-blue-700">
                          Calories Burned:
                        </h3>
                        <div className="bg-gray-200 px-3 py-2 rounded-md">
                          <span className="text-gray-800">
                            {stat.caloriesBurned} kcal
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mx-3 mb-4">
                      <h3 className="text-lg font-semibold text-blue-700">
                        Number Of Pushups:
                      </h3>
                      <div className="bg-gray-200 px-3 py-2 rounded-md">
                        <span className="text-gray-800">
                          {stat.numOfPushUps}
                        </span>
                      </div>
                    </div>
                    <div className="mx-3 mb-4">
                      <h3 className="text-lg font-semibold text-blue-700">
                        Load/Resistance:
                      </h3>
                      <div className="bg-gray-200 px-3 py-2 rounded-md">
                        <span className="text-gray-800">
                          {stat.loadResistance}
                        </span>
                      </div>
                    </div>
                    <div className="mx-3 mb-4">
                      <h3 className="text-lg font-semibold text-blue-700">
                        Date:
                      </h3>
                      <div className="bg-gray-200 px-3 py-2 rounded-md">
                        <span className="text-gray-800">{stat.date}</span>
                      </div>
                    </div>
                    <div className="mx-3 mb-4">
                      <h3 className="text-lg font-semibold text-blue-700">
                        Description:
                      </h3>
                      <div className="bg-gray-200 px-3 py-2 rounded-md">
                        <span className="text-gray-800">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus volutpat, odio eget scelerisque
                          lacinia, ante nisi rhoncus lacus, ac rutrum eros leo
                          sed leo. Proin non odio vitae sem congue volutpat.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
