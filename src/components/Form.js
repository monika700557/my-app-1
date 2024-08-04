import React from "react";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillGoogleCircle } from "react-icons/ai";

export default function Form() {
  return (
    
      
     
   


     <div className="bg-white px-10  py-10 rounded-3xl  w-1/3 block">

      


  <h1 className="text-2xl font-semibold text-gray-600 flex items-center justify-center ">
    Login
  </h1>
  <p className="font-medium text-lg text-gray-500 mt-2  flex items-center justify-center">
    Access to our dashboard
  </p>

  <div className="mt-4 ">
    <div>
      <label className="text-xs text-gray-500 font-bold">
        Email Address
      </label>
      <input className="w-full border-2 border-gray-200 p-2 0-4  bg-transparent" />
    </div>
    <div className="mt-3">
      <label className="text-xs text-gray-500 font-bold ">Password</label>
      <input className="w-full border-2 border-gray-200 p-2 0-4 mt-1 bg-transparent" />
    </div>

    <div className="mt-8 flex justify-between items-center">
      <div>
        <input type="checkbox" id="remember" />
        <label
          className="ml-2 font-medium text-base text-gray-500"
          for="remember"
        >
          Remember me
        </label>
      </div>
      <button className="font-medium text-base text-blue-500">
        Forgot Password ?
      </button>
    </div>
    <div className="mt-8 flex flex-col gap-y-4 font-medium text-base text-violet-500">
      <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  py-3 rounded-xl bg-violet-600 text-white text-lg font-bold ">
        Login{" "}
      </button>

      <div className="mt-4 flex justify-between items-center">
        <span className="block w-full border-t border-gray-300"></span>
        <span className="px-4 text-gray-400 font-medium">OR</span>
        <span className="block w-full border-t border-gray-300"></span>
      </div>

      <button className="flex rounded-xl py-3   items-center justify-center gap-2 text-gray-500">
        Login with
        <img
          className="w-8"
          src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/social-facebook-icon.png"
          alt="React Logo"
        />
        <img
          className="w-8"
          src="https://static.vecteezy.com/system/resources/previews/021/514/894/non_2x/google-symbol-logo-white-design-illustration-with-red-background-free-vector.jpg"
          alt="React Logo"
        />
      </button>
    </div>
    <div className="mt-8 flex justify-center items-center">
      <p className="font-medium text-base text-gray-500">
        Don't have an account yet?{" "}
      </p>
      <button className="text-black text-base font-medium ml-2">
        Register
      </button>
    </div>
  </div>
</div>


    
    
    
  );
}
