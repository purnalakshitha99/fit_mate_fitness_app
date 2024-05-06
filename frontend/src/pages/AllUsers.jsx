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

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await UserService.getUser();
        setUsers(response.data);
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
          <div className="grid  lg:grid-cols-4 md:grid-cols-2 p-4 ml-[300px] ">
            {users?.map((u, index) =>
              u.id !== user.id ? (
                <div
                  className="p-3 m-auto space-y-4 cursor-pointer"
                  key={index}
                >
                  <div className="w-[150px] h-[150px]">
                    <img
                      src={u.profilePictureUrl}
                      alt={`${u.firstName} profile`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <button
                    onClick={(e, id) => viewUser(e, u.id)}
                    className="rounded-lg w-full p-2 text-white text-lg font-semibold bg-[#74779bf0]  hover:bg-blue-400 transition-colors"
                  >
                    View Profile
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
