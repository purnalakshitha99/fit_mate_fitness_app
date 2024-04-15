import { Tabs } from "@material-tailwind/react";
import "./App.css";
import NavBar from "./pages/NavBar";
import Post from "./pages/Post";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className=" space-y-10 ml-[25rem] mt-36">
          <Tabs />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
