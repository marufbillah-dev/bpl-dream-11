const Temp = () => {
  return (
    <div>
      {/* selected players */}
      <div className="">
        {playersData.map((player) => (
          <SelectedPlayer key={player.id} player={player}></SelectedPlayer>
        ))}
        <button className="rounded-2xl p-1.5 sm:p-2 border-2 border-[#E7FE29] cursor-pointer transition-transform active:scale-95 hover:border-[#d4e924]">
          <div className="rounded-xl py-2 px-3 sm:py-3.5 sm:px-4.5 bg-[#E7FE29] font-bold text-neutral transition-colors hover:bg-[#d4e924]">
            Add More Players
          </div>
        </button>
      </div>
    </div>
  );
};

export default Temp;
