import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SelectedPlayer = ({
  player,
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
}) => {
  const name = player?.name;
  const battingStyle = player?.battingStyle;
  const price = player?.price;
  const image = player?.image;

  const handleDeleteSelectedPlayer = (player) => {
    const newSelectedPlayers = selectedPlayer.filter(
      (selectedPlayer) => selectedPlayer.name !== player.name,
    );

    setSelectedPlayer(newSelectedPlayers);
    setCoin(coin + price);

    toast.info(`"${name}" removed!`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center p-4 sm:p-6 rounded-2xl border border-neutral/10 w-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="w-20 h-20 bg-gray-300 rounded-2xl shrink-0 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between items-center w-full">
        <div className="text-center sm:text-left">
          <h3 className="mb-1 sm:mb-3 font-semibold text-xl sm:text-2xl text-neutral leading-tight">
            {name}
          </h3>
          <p className="text-neutral/60 text-sm sm:text-base">{battingStyle}</p>
        </div>

        <button
          className="text-xl text-[#F14749] flex items-center justify-center hover:bg-red-50 hover:text-[#ff0105] p-3 sm:p-2 rounded-full transition-all cursor-pointer"
          onClick={() => handleDeleteSelectedPlayer(player)}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
