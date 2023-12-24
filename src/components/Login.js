import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {isSignIn ? "SignIn" : "SignUp"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-600 w-full">
          {isSignIn ? "SignIn" : "SignUp"}
        </button>
        <p className="cursor-pointer" onClick={handleForm}>
          New to Netflix. Sign Up
        </p>
      </form>
    </div>
  );
};

export default Login;
