import { use, useState } from "react";
import PlayerCard from "./PlayerCard";
import SelectedPlayer from "./SelectedPlayer";
import NoPlayerSelected from "./NoPlayerSelected";

const Players = ({ playersPromise, setCoin, coin }) => {
  const players = use(playersPromise);

  // State: Filter Buttons
  const [activeBtn, setActiveBtn] = useState("available");

  // State: Selected Player
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-330 mx-auto px-4 sm:px-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          {/* Conditional Heading */}
          <h2 className="text-neutral font-bold text-2xl md:text-[1.75rem]">
            {activeBtn === "available"
              ? "Available Players"
              : `Selected Players (${selectedPlayer.length} / ${players.length})`}
          </h2>

          {/* Filter Buttons */}
          <div className="flex w-full sm:w-auto border border-neutral/10 rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setActiveBtn("available")}
              className={`flex-1 sm:flex-none px-6 py-3 text-sm md:text-base font-semibold cursor-pointer transition-colors
              ${activeBtn === "available" ? "bg-[#E7FE29] hover:bg-[#d4e924]" : "bg-white hover:bg-gray-50"}
              `}
            >
              Available
            </button>
            <button
              onClick={() => setActiveBtn("selected")}
              className={`flex-1 sm:flex-none px-6 py-3 text-sm md:text-base font-semibold cursor-pointer transition-colors
              ${activeBtn === "selected" ? "bg-[#E7FE29] hover:bg-[#d4e924]" : "bg-white hover:bg-gray-50"}
              `}
            >
              Selected ({selectedPlayer.length})
            </button>
          </div>
        </div>

        {/* Render PlayerCard / Available Player */}
        <div
          className={`${
            activeBtn === "available" ? "grid" : "hidden"
          } grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center`}
        >
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              coin={coin}
              setCoin={setCoin}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
            />
          ))}
        </div>

        {/* Render SelectedPlayer */}
        <div
          className={`${
            activeBtn === "available" ? "hidden" : "inline"
          } space-y-3 sm:space-y-4 lg:space-y-6`}
        >
          {selectedPlayer.map((player) => (
            <SelectedPlayer
              key={player.id}
              player={player}
              coin={coin}
              setCoin={setCoin}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
            />
          ))}
        </div>

        {/* No Player Selected */}
        {!selectedPlayer.length && activeBtn === "selected" && (
          <NoPlayerSelected setActiveBtn={setActiveBtn} />
        )}

        {/* Conditional Add More Player Button */}
        <div
          className={`${activeBtn === "available" ? "hidden" : !selectedPlayer.length ? "hidden" : "inline-block"} mt-6 sm:mt-8 lg:mt-10 w-full`}
        >
          <button
            className="max-sm:w-full rounded-2xl p-1.5 sm:p-2 border-2 border-[#E7FE29] cursor-pointer transition-transform active:scale-95 hover:border-[#d4e924]"
            onClick={() => setActiveBtn("available")}
          >
            <div className="rounded-xl py-2 px-3 sm:py-3.5 sm:px-4.5 bg-[#E7FE29] font-bold text-neutral transition-colors hover:bg-[#d4e924]">
              Add More Players
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Players;
