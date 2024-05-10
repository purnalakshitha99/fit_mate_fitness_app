import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../services/UserService";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const EditUserDetails = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    phoneNumber: "",
    bio: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getUserById(id);
        setUser(response.data);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [id]);




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formErrors = {};



    if (!user.firstName.trim()) {
      formErrors.firstName = "First Name is required";
    }
    if (!user.lastName.trim()) {
      formErrors.lastName = "Last Name is required";
    }
    if (!user.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      formErrors.email = "Email address is invalid";
    }


    setErrors(formErrors);


    const data = {
      ...user,
      // profilePictureUrl: imageUrl,
    };
    console.log("userdata ", data);
    UserService.updateUser(data, id)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log("error");
      });
    setLoading(false);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10">
        <NavBar />
      </div>
      <div className="fixed top-[75px] left-0 h-screen z-10">
        <SideBar />
      </div>
      <div className="flex flex-row  mt-[300px] justify-center">
        <div className="bg-white w-[900px] h-screen shadow-md rounded-md p-8 w-100 ">
          <h2 className="text-xl font-semibold mb-4">Edit User Details</h2>
          <form className=" space-y-10">
            <div className=" flex flex-col ">
            </div>
            <div className="flex flex-row gap-3">
              <label htmlFor="firstname" className="block text-gray-700">
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={(e) => handleChange(e)}
                  placeholder="First Name"
                  className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                />
              </label>
              <label htmlFor="lastName" className="block text-gray-700 ml-auto">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={(e) => handleChange(e)}
                  placeholder="Last Name"
                  className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                />
              </label>
            </div>
            <div className="">
              <label htmlFor="email" className="block text-gray-700">
                Email
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                  placeholder="Email"
                  className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                />
              </label>
            </div>
            <div className="">
              <label htmlFor="phoneNumber" className="block text-gray-700">
                Phone Number
                <input
                  type="text"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={(e) => handleChange(e)}
                  placeholder="Phone Number"
                  className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                />
              </label>
            </div>
            <div className="flex flex-row gap-3">
              <label htmlFor="username" className="block text-gray-700">
                User Name
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={(e) => handleChange(e)}
                  placeholder="User Name"
                  className="w-full px-3 mt-2 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                />
              </label>
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">
                Address
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={(e) => handleChange(e)}
                  placeholder="Address"
                  className="w-full mt-2 px-3 py-2 rounded-md border border-gray-300 mb-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-10"
                ></textarea>
              </label>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetails;
