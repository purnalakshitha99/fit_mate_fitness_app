import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [followStatus, setFollowStatus] = useState({});
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(JSON.parse(user));
  }, []);

  console.log("users", users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await UserService.getUser();
        setUsers(response.data);
        console.log(response);
        // Initialize follow status based on current user's followed users
        const followedUsers = response.data.reduce((acc, u) => {
          acc[u.userId] = user.following.includes(u.userId);
          return acc;
        }, {});
        setFollowStatus(followedUsers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [user]); // Refetch data when user changes

  const viewUser = (e, id) => {
    e.preventDefault();

    navigate(`/oneuser/${id}`);
  };

  const handleFollowClick = async (userId) => {
    try {
      // Toggle follow status
      const updatedFollowStatus = { ...followStatus };
      updatedFollowStatus[userId] = !updatedFollowStatus[userId];
      setFollowStatus(updatedFollowStatus);

      const response = await UserService.followUsers(user.id, userId);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <NavBar />
      </div>
      <div className="fixed top-[75px] left-0 h-screen z-10">
        <SideBar />
      </div>
      <div>
        <div className="flex-1 overflow-y-auto mt-40 ">
          <div className="grid grid-cols-4  p-4 ml-[300px] ">
            {users?.map((u, index) =>
              u.id !== user.id ? (
                <div
                  className="p-3 m-auto space-y-4 cursor-pointer"
                  key={index}
                >
                  <div
                    className="w-[200px] h-[200px]"
                    onClick={(e, id) => viewUser(e, u.id)}
                  >
                    <img
                      src={u.profilePictureUrl}
                      alt={`${u.firstName} profile`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <button
                    onClick={() => handleFollowClick(u.id)}
                    className="bg-blue-600 rounded-lg w-full"
                  >
                    {followStatus[u.userId] ? "Unfollow" : "Follow"}
                  </button>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
