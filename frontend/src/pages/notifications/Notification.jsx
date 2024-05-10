import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import toast from "react-hot-toast";

const Notification = ({ loggedInUser }) => {
  const [user, setUser] = useState({});
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getUserById(loggedInUser.id);
        setUser(response.data);
      } catch (error) {}
    };
    fetchData();
  }, [refetch]);

  const handleClearNOtificatoins = async (e, id) => {
    const response = await UserService.clearNotifications(id);
    toast.remove(response.data);
    setRefetch(true);
  };

  return (
    <div>
      <div className="w-[400px] h-full  flex flex-col  gap-4">
        <div className=" flex flex-col items-center w-full">
          {user.notifications}
        </div>
        <hr></hr>
      </div>
      <div className=" flex items-end ml-[400px]">
        <button
          className=" bg-gray-400 rounded-lg p-[3px] w-[50px] text-xs text-white hover:bg-gray-500 hover:text-black mt-2"
          onClick={(e, id) => handleClearNOtificatoins(e, user.id)}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Notification;
