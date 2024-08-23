import React from "react";

const Card = ({ realName, playerName, asset }) => {
  const cardClick = () => {};
  return (
    <div className="w-10rem">
      <div key={playerName}>
        <div className="p-4 max-w-sm" onClick={cardClick}>
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-zinc-200 p-8 flex-col">
            <div className="flex flex-col justify-between flex-grow">
              <p className="leading-relaxed text-base text-black dark:text-gray-300">
                <p>{realName}</p>
                <p>{playerName}</p>
                <p className="truncate">{asset}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
