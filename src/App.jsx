import { useState, useEffect } from "react";
import Details from "./components/Details.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";
import Controller from "./components/Controller.jsx";
import "./index.css";

const App = () => {
  const [activeCard, setActiveCard] = useState({});
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/api/players")
        .then((response) => response.json())
        .then((data) => {
          setPlayers(data);
        })
        .catch((error) => console.error("Error:", error));
    };
    fetchData();
  }, []);

  const sortAsc = () => {
    const sortedPlayers = players.sort((a, b) => {
      if (a.realName < b.realName) return -1;
      if (a.realName > b.realName) return 1;
      return 0;
    });
    setPlayers([...sortedPlayers]);
  };

  const sortDesc = () => {
    const sortedPlayers = players.sort((a, b) => {
      if (a.realName > b.realName) return -1;
      if (a.realName < b.realName) return 1;
      return 0;
    });
    setPlayers([...sortedPlayers]);
  };

  const submit = () => {
    alert(
      "Real name: " +
        activeCard.realName +
        "\nPlayer name: " +
        activeCard.playerName +
        "\nAsset: " +
        activeCard.asset
    );
  };

  return (
    <div className="w-screen h-screen ">
      <div className="p-5">
        <div className="flex  gap-5 ">
          <Details activeCard={activeCard} />
          <Controller
            onSortAsc={sortAsc}
            onSortDesc={sortDesc}
            onSubmit={submit}
            activeCard={activeCard}
          />
        </div>
        <Cards
          players={players}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
