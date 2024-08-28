import React from "react";
import Card from "./Card";

const Cards = ({ players, setActiveCard, activeCard }) => {
  return (
    <div className="">
      <p className="flex-inline text-4xl font-medium text-gray-900 m-6">
        Overview
      </p>
      <div className="flex w-70">
        <div className="flex grid gap-4 md:grid-cols-3 grid-cols-2 grid-rows-3 ">
          {players.map((player) => (
            <Card
              player={player}
              setActiveCard={setActiveCard}
              key={player.playerName}
              activeCard={activeCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
