import React from "react";
import Card from "./Card";

const Cards = ({ players, setActiveCard, activeCard }) => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 ">
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
  );
};

export default Cards;
