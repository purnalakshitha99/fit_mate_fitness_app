
import SigninImage from "../assets/signin.jpg";
import Google from "../assets/search.png" // Use default import
import React,{useState} from "react";


const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabaled: "#D9D9D9",
};

const SignIn = () => {
  return (
    <div>
      {/* <div className="w-full min-h-screen flex items-start">
            <div className= 'relative w-1/2 h-full flex flex-col'>
                <div className='absolute top-[25%] left-[10%] flex flex-col'>
                    <h1 className='text-4x1 font-bold my-4 text-white'>
                        Turn Your Ideas into reality
                    </h1>
                    <p className='text-x1 text-white font-normal'>Start for free and get attractive from the community</p>
                    <div className=' '>
            <img src={SigninImage} className='w-full h-full object-cover'/>
            </div> 
                </div>
           
            </div>
            <div className='w-full h-full bg-[#E0E0E0] flex flex-col'>
                <h1 className='text-base '></h1>

            </div>
        </div> */}
      <div className=" flex flex-row">
        <div className=" bg-red-600 w-1/2">
          <img src={SigninImage}  className=" h-screen w-screen"/>
        </div>
        <div className=" w-1/2  bg-[#f5f5f5] flex flex-col p-20  h-screen  justify-between items-center">
          <h1 className="text-x1 text-[#060606] font-semibold">
            Interactive brand
          </h1>

          <div className="w-full flex-col max-w-[500px]">
            <div className="flex flex-col w-full mb-2">
              <h3 className="text-3xl font-semibold mb-2">Login</h3>
              <p className="text-base mb-2">
                Welcom Back! Please enter your details
              </p>
            </div>
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full text-black py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none"
              />
            </div>
            <div className="w-full justify-between item-center">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                
              </div>
              <div className=" flex justify-between">
              <p className="text-5m">Remeber Me for 30 days</p>
                <p className="text-5m cursor-pointer underline">Forgot Password</p>
              </div>
            </div>
            <div className="w-full flex flex-col my-4 ">
                <button className="w-full text-white bg-[#060606] my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">Login</button> 
            </div>
            <div className="w-full flex flex-col my-4 ">
                <button className="w-full text-[#060606]  bg-white border-2 border-black my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">Register</button> 
            </div>
          </div>
          <div className="w-full flex items-center justify-center relative py-2 ">
            <div className="w-full h-[1px] bg-black/40"></div>
            <p className="absolute text-black/80  bg-[#f5f5f5]">or</p>
          </div>
          <div className="flex flex-col my-4 w-[500px]">
            <button className="w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                <img src={Google} className="h-6 mr-2"/>
                Sign In With Google
            </button> 
            </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-lg  font-normal text-black/88 bg-white">
              Dont have a account?
              <span className="font-semibold underline underline-offset-2 cursor-pointer"></span>{" "}
              <button className=" underline text-blue-500">Sign up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
