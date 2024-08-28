import React from "react";

const Details = ({ activeCard }) => {
  return (
    <div className="flex  w-full rounded-md bg-gray-300 ">
      <p className="flex-inline text-4xl font-medium text-gray-900 m-6">
        Details
      </p>
      {activeCard.realName && (
        <div className="pl-6 leading-relaxed text-xl text-black ">
          <p>-{activeCard.realName}</p>
          <p>-{activeCard.playerName}</p>
          <p>-{activeCard.asset}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
