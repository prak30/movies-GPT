import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute py-2 px-3 bg-gradient-to-b from-black z-20 flex justify-between w-screen">
      <img
        className=""
        src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
