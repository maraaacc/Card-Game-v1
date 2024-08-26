import React from "react";

const Card = ({ player, setActiveCard, activeCard }) => {
  console.log(activeCard);
  return (
    <div className="w-30 " onClick={() => setActiveCard(player)}>
      <div className="p-4 ">
        <div
          className={`flex rounded-lg h-full p-8 flex-col hover:shadow-lg hover:scale-105 transition ${
            player === activeCard
              ? "dark:bg-gray-400 bg-gray-400 scale-105 shadow-2xl"
              : "dark:bg-gray-800 bg-zinc-200"
          }`}
        >
          <div className="flex flex-col justify-between flex-grow">
            <div className="leading-relaxed text-base text-black dark:text-gray-300">
              <p>{player.realName}</p>
              <p>{player.playerName}</p>
              <p className="w-20 truncate">{player.asset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
