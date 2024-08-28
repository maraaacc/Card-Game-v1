import React from "react";

const Details = ({ activeCard }) => {
  return (
    <div className=" w-full rounded-md bg-gray-300 ">
      <div className="flex">
        <p className=" text-4xl font-medium text-gray-900 m-6">Details</p>
      </div>
      <div className="flex">
        {activeCard.realName && (
          <div className="pl-6 leading-relaxed text-xl text-black sm:pb:5">
            <p>-{activeCard.realName}</p>
            <p>-{activeCard.playerName}</p>
            <p>-{activeCard.asset}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
