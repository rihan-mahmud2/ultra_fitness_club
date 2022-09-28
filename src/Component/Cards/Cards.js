import React from "react";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import "./Cards.css";
import Profile from "../Profile/Profile";
import { addTo } from "../Local/Local";

const Cards = () => {
  const [activities, setActivities] = useState([]);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((activities) => setActivities(activities));
  }, []);

  useEffect(() => {
    const saveTime = localStorage.getItem("Amount");
    if (saveTime) {
      console.log(saveTime);
      setDuration(parseFloat(saveTime));
    }
  }, []);

  const addToInformation = (time) => {
    setDuration(parseFloat(time) + duration);
    addTo(parseFloat(time) + duration);
  };

  return (
    <div className="main-container">
      <div className="grid grid-cols-3 gap-4 mt-10">
        {activities.map((activity) => (
          <Card
            activity={activity}
            addToInformation={addToInformation}
            key={activity.id}
          ></Card>
        ))}
      </div>
      <div>
        <Profile duration={duration}></Profile>
      </div>
    </div>
  );
};

export default Cards;
