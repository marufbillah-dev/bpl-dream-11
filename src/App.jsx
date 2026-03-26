import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Players from "./Components/Players";
import PlayersLoading from "./Components/PlayersLoading";

// fetch players data from json
const fetchPlayers = async () => {
  const response = await fetch("/players.json");
  return response.json();
};

function App() {
  const playersPromise = fetchPlayers();

  // State Management for Coins
  const [coin, setCoin] = useState(15000);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      <Suspense fallback={<PlayersLoading></PlayersLoading>}>
        <Players
          playersPromise={playersPromise}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
