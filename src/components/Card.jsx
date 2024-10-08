import React from "react";

const Card = ({ player, setActiveCard, activeCard }) => {
  return (
    <div className="" onClick={() => setActiveCard(player)}>
      <div className="p-3 m-1 ">
        <div
          className={`flex rounded-lg h-full p-8 flex-col hover:shadow-lg hover:scale-105 transition ${
            player === activeCard
              ? "dark:bg-gray-400 bg-gray-400 scale-105 shadow-2xl"
              : "dark:bg-gray-800 bg-zinc-200"
          }`}
        >
          <div className="flex flex-col justify-between flex-grow">
            <div className="leading-relaxed text-base text-black dark:text-gray-300">
              <p className=" truncate">-{player.realName}</p>
              <p className=" truncate">-{player.playerName}</p>
              <p className=" truncate">-{player.asset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
