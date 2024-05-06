import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserRouter from "./router/UserRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <UserRouter />
    </>
  );
}

export default App;
