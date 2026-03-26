import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Players from "./Components/Players";
import PlayersLoading from "./Components/PlayersLoading";

const fetchPlayers = async () => {
  const response = await fetch("/players.json");
  return response.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<PlayersLoading></PlayersLoading>}>
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
