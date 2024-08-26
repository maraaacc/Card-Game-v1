import { useState } from "react";
import Details from "./components/Details.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import "./index.css";

let playersArray = [
  {
    asset: "Secret Glowquake Gold",
    playerName: "Crystaldash",
    realName: "Darcy Candice Ball",
  },
  {
    asset: "Foghammer Lead",
    playerName: "Dreamlurk The Unstoppable",
    realName: "Brianna Forbes",
  },
  {
    asset: "Valkyries' Opal Adamant",
    playerName: "Seekvenom The Mystic",
    realName: "Elva Becky Hammond",
  },
  {
    asset: "Jewelevil Bronze Of Goddesses",
    playerName: "Coincurse The Ghoul",
    realName: "Enid Rose",
  },
  {
    asset: "Yellow Orichalcum Of Paladins",
    playerName: "Skulldart",
    realName: "Esmeralda Carrillo",
  },
  {
    asset: "Shifting Rainshadow Iron",
    playerName: "Speedsoul",
    realName: "Hillary Gibbs",
  },
];

const App = () => {
  const [activeCard, setActiveCard] = useState({});

  const [players, setPlayers] = useState(playersArray);

  const sortAsc = () => {
    console.log("hi");
    const sortedPlayers = players.sort((a, b) => {
      if (a.realName < b.realName) return -1;
      if (a.realName > b.realName) return 1;
      return 0;
    });
    setPlayers([...sortedPlayers]);
  };
  const sortDesc = () => {
    console.log("hello");
    const sortedPlayers = players.sort((a, b) => {
      if (a.realName > b.realName) return -1;
      if (a.realName < b.realName) return 1;
      return 0;
    });
    setPlayers([...sortedPlayers]);
  };

  return (
    <div className="w-screen h-screen p-5">
      <div className="flex gap-5">
        <Details activeCard={activeCard} />
        <Controller onSortAsc={sortAsc} onSortDesc={sortDesc} />
      </div>
      <Cards
        players={players}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
      />
      <Footer />
    </div>
  );
};

export default App;
