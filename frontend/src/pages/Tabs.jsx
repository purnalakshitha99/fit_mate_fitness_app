import React, { useState } from "react";
import Post from "./Post";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("app");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className=" w-[1000px] ">
      <div className="relative right-0">
        <ul
          className="relative  flex flex-wrap p-5 list-none rounded-xl bg-blue-gray-50/60 border" // Removed border class
          data-tabs="tabs"
          role="list"
        >
          <li className={`z-30 flex-auto text-center ${activeTab === "app" ? "" : ""}`}>
            <a
              className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "app"}
              aria-controls="app"
              onClick={() => handleTabClick("app")}
            >
              <span className="ml-1">Feed</span>
            </a>
          </li>
          <li className={`z-30 flex-auto text-center ${activeTab === "message" ? "" : ""}`}>
            <a
              className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "message"}
              aria-controls="message"
              onClick={() => handleTabClick("message")}
            >
              <span className="ml-1">Messages</span>
            </a>
          </li>
          <li className={`z-30 flex-auto text-center ${activeTab === "settings" ? "" : ""}`}>
            <a
              className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
              data-tab-target=""
              role="tab"
              aria-selected={activeTab === "settings"}
              aria-controls="settings"
              onClick={() => handleTabClick("settings")}
            >
              <span className="ml-1">Settings</span>
            </a>
          </li>
        </ul>
        <div data-tab-content=" " className="p-5">
          <div className={`block ${activeTab === "app" ? "opacity-100" : "hidden"}`} id="app" role="tabpanel">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
            <Post />
             <Post />
            </p>
          </div>
          <div className={`block ${activeTab === "message" ? "opacity-100" : "hidden"}`} id="message" role="tabpanel">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
             asdad
            </p>
          </div>
          <div className={`block ${activeTab === "settings" ? "opacity-100" : "hidden"}`} id="settings" role="tabpanel">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
              Content for Settings tab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
