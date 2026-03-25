import { use } from "react";
import Player from "./Player";

const Players = ({ playersPromise }) => {
  const playersData = use(playersPromise);

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-330 mx-auto px-4 sm:px-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-neutral font-bold text-2xl md:text-[1.75rem]">
            Available Players
          </h2>

          <div className="flex w-full sm:w-auto border border-neutral/10 rounded-xl overflow-hidden shadow-sm">
            <button className="flex-1 sm:flex-none bg-[#E7FE29] px-6 py-3 text-sm md:text-base font-semibold cursor-pointer transition-colors hover:bg-[#d4e924]">
              Available
            </button>
            <button className="flex-1 sm:flex-none bg-white px-6 py-3 text-sm md:text-base font-semibold cursor-pointer transition-colors hover:bg-gray-50">
              Selected (<span className="tabular-nums">0</span>)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {playersData.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Players;
