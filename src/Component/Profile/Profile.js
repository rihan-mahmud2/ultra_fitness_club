import React, { useState } from "react";
import Logo from "../../Images/download.jpg";

const Profile = (props) => {
  const [breakTime, setBreakTime] = useState(0);
  const changeBreakTime = (duration) => {
    setBreakTime(duration);
  };
  return (
    <div className="h-full bg-white shadow-2xl ">
      <div className="flex items-center justify-around">
        <img src={Logo} className="w-[100px]" alt=""></img>
        <p className="text-xl relative">
          Rihan Mahmud
          <small className="absolute top-5 right-3 text-xl">
            Sylhet,Bangladesh
          </small>
        </p>
      </div>

      <div>
        <h1 className="text-xl font-bold text-center">Add a break</h1>
        <div className="bg-gray-400 w-[90%] text-center text-2xl mt-7 px-4 mx-auto py-5 rounded-2xl">
          <small
            onClick={() => changeBreakTime(10)}
            className="bg-white p-2 rounded-full mr-3"
          >
            10s
          </small>
          <small
            onClick={() => changeBreakTime(20)}
            className="bg-white p-2 rounded-full mr-3"
          >
            20s
          </small>
          <small
            onClick={() => changeBreakTime(30)}
            className="bg-white p-2 rounded-full mr-3"
          >
            30s
          </small>
          <small
            onClick={() => changeBreakTime(40)}
            className="bg-white p-2 rounded-full mr-3"
          >
            40s
          </small>
          <small
            onClick={() => changeBreakTime(50)}
            className="bg-white p-2 rounded-full mr-3 cursor-pointer"
          >
            50s
          </small>
        </div>
      </div>

      <h1 className="text-2xl text-center">Excercise Details</h1>
      <div className="bg-gray-400 w-[90%] text-center text-2xl mt-7 px-4 mx-auto py-5 rounded-2xl">
        <p>
          Excercis Time <small className="pl-10"> {props.duration}</small>
        </p>
      </div>
      <div className="bg-gray-400 w-[90%] text-center text-2xl mt-7 px-4 mx-auto py-5 rounded-2xl">
        <p>
          Break Time <small className="pl-10"> {breakTime}</small>
        </p>
      </div>
      <button className="btn btn-primary w-[75%] ml-10 mt-10">
        Activity Completed
      </button>
    </div>
  );
};

export default Profile;
