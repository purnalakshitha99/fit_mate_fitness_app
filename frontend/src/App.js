import "./App.css";
import HeroSection16 from "./pages/Hero";
import NavBar from "./pages/NavBar";
import Post from "./pages/Post";
import SideBar from "./pages/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex">
        <SideBar />
        {/* <HeroSection16 /> */}
        <div className=" space-y-10 ml-[25rem] mt-20">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
