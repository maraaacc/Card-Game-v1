import React from "react";

const Details = ({ activeCard }) => {
  return (
    <div className=" w-full bg-slate-400 ">
      <p className="text-4xl font-medium text-gray-900 m-3">Details:</p>
      <div className="pl-3 leading-relaxed text-base text-black ">
        <p>{activeCard.realName}</p>
        <p>{activeCard.playerName}</p>
        <p>{activeCard.asset}</p>
      </div>
    </div>
  );
};

export default Details;
