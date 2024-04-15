import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Tabs from "./Tabs";
import Post from "./Post";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className=" space-y-10 ml-[25rem] mt-36">
          <div >
            <Tabs />
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Home;
