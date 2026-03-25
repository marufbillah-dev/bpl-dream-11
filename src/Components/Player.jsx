import { FaFlag, FaStar, FaUserAlt } from "react-icons/fa";

const Player = ({ player }) => {
  const name = player?.name;
  const country = player?.country;
  const role = player?.role;
  const rating = player?.rating;
  const battingStyle = player?.battingStyle;
  const price = player?.price;
  const image = player?.image;

  return (
    <div className="p-4 sm:p-6 rounded-2xl border border-neutral/10 w-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="rounded-2xl overflow-hidden mb-6 bg-neutral/5 flex justify-center">
        <img
          src={image}
          alt={name}
          className="w-94 h-60 max-w-full object-cover object-center"
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-2 rounded-full bg-neutral/5 text-neutral/80">
              <FaUserAlt className="text-xl" />
            </div>
            <h4 className="font-bold text-lg sm:text-xl text-neutral truncate">
              {name}
            </h4>
          </div>

          <div className="flex justify-between items-center gap-2 pl-2">
            <div className="flex items-center gap-2 text-neutral/60">
              <FaFlag className="text-lg shrink-0" />
              <h5 className="text-sm sm:text-base truncate">{country}</h5>
            </div>
            <span className="text-neutral text-xs sm:text-sm font-medium rounded-lg px-3 py-1.5 bg-neutral/5 whitespace-nowrap">
              {role}
            </span>
          </div>
        </div>

        <hr className="border-neutral/10" />

        <div className="space-y-3 text-sm sm:text-base">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 font-semibold">Rating</p>
            <div className="flex items-center gap-1 text-neutral/70">
              <FaStar className="text-yellow-500" />
              <span className="font-medium pt-0.5">{rating}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600 font-semibold">Batting Style</p>
            <span className="text-neutral/70">{battingStyle}</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
            <p className="text-gray-800 font-bold text-base sm:text-lg">
              Price: ${price}
            </p>
            <button className="w-full sm:w-auto text-gray-600 font-semibold border border-neutral/20 hover:bg-neutral hover:text-white transition-all text-sm rounded-lg px-4 py-2.5 cursor-pointer">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
