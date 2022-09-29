import React from "react";
import Logo from "../../Images/logo.jpg";

const Header = () => {
  return (
    <div>
      <div className="container mx-auto mt-4 flex flex-row items-center">
        <img src={Logo} className="w-[100px] rounded-full" alt=""></img>
        <h1 className="text-blue-700 text-4xl">Entertainment Club</h1>
      </div>
      <h2 className="text-blue-700 text-[50px] ml-[150px] mt-[50px]">
        Selec your Five best activities
      </h2>
    </div>
  );
};

export default Header;
