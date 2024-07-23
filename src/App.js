import { useEffect, useState } from "react";
import "./App.css";
import LeaderBoard from "./pages/LeaderBoard.js";
import Navbar from "./pages/Navbar.js";

function App() {
  let existingPlayers = [
    {
      name: "Anjum ",
      amount: 50000,
      time: "00:56:23 ",
    },
    {
      name: "Pragati Azad ",
      amount: 5000,
      time: "01:15:20 ",
    },
    {
      name: "Razzi ",
      amount: 500,
      time: "01:18:66 ",
    },
    {
      name: "Thea Mayer ",
      amount: 100,
      time: "02:18:66 ",
    },
    {
      name: "fida ",
      amount: 200,
      time: "02:18:66 ",
    },
    {
      name: "Yahir Mason ",
      amount: 300,
      time: "02:18:66 ",
    },
    {
      name: "Miracle Hudson ",
      amount: 400,
      time: "02:18:66 ",
    },
    {
      name: "Nancy Parra ",
      amount: 500,
      time: "02:18:66 ",
    },
    {
      name: "Finn Ho ",
      amount: 600,
      time: "02:18:66 ",
    },
    {
      name: "Jordan Burgess ",
      amount: 150,
      time: "02:18:66 ",
    },
  ];

  function getLocalValue() {
    const list = localStorage.getItem("players");
    if (list) {
      return JSON.parse(list);
    } else {
      return existingPlayers;
    }
  }

  const [players, setPlayers] = useState(() => getLocalValue());
  useEffect(() => {
    window.localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  return (
    <div className="home-page">
      <header>
        <Navbar setPlayers={setPlayers} />
      </header>
      <main>
        <LeaderBoard players={players} />
      </main>
      <footer>Footer : Disclaimers / Announcenment / etc</footer>
    </div>
  );
}

export default App;
