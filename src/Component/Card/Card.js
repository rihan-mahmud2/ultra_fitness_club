import React from "react";

const Card = ({ activity, addToInformation }) => {
  const { picture, name, duration, age } = activity;
  return (
    <div className="container">
      <div className="card  bg-base-100 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-3 text-2xl">{name}</h2>
          <h3 className="card-title mb-3 text-2xl">duration: {duration}</h3>
          <h3 className="card-title mb-3 text-2xl">Age: {age}</h3>

          <p className="text-2xl mb-3">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-center">
            <button
              onClick={() => addToInformation(duration)}
              className="btn btn-primary w-[75%]"
            >
              Add To List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
