import { HiOutlineUserGroup } from "react-icons/hi2";

const NoPlayerSelected = ({ setActiveBtn }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 p-8 bg-white border border-dashed border-neutral/20 rounded-2xl text-center transition-all animate-fadeIn">
      {/* Empty State Icon */}
      <div className="w-24 h-24 mb-6 rounded-full bg-neutral/5 flex items-center justify-center text-neutral/20">
        <HiOutlineUserGroup size={48} />
      </div>

      {/* Text Content */}
      <div className="max-w-xs space-y-3">
        <h3 className="font-bold text-2xl text-neutral">No Player Selected</h3>
        <p className="text-neutral/60 leading-relaxed">
          Your dream team is currently empty. Start adding players to see them
          listed here!
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => setActiveBtn("available")}
        className="mt-8 bg-[#E7FE29] px-8 py-3.5 rounded-xl font-bold text-neutral shadow-sm hover:bg-[#d4e924] transition-all active:scale-95 cursor-pointer border border-neutral/5"
      >
        Browse Available Players
      </button>
    </div>
  );
};

export default NoPlayerSelected;
