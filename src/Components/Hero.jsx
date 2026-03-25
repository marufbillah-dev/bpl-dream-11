import heroLogo from "../assets/banner-main.png";

const Hero = () => {
  return (
    <section className="max-w-330 mx-auto px-4 sm:px-2">
      <div className="rounded-3xl py-12 md:py-16 px-6 text-center flex flex-col gap-6 items-center bg-[#131313] bg-[url('/bg-shadow.png')] bg-cover bg-no-repeat bg-center mb-12 md:mb-22">
        <img
          src={heroLogo}
          alt="Cricket Banner"
          className="w-48 sm:w-64 md:w-auto h-auto object-contain"
        />

        <div className="hero-contents space-y-4 md:space-y-6 max-w-4xl">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-[40px] text-white leading-tight">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="font-inter text-lg sm:text-xl md:text-2xl font-medium text-white/70">
            Beyond Boundaries Beyond Limits
          </p>

          <button className="rounded-2xl p-1.5 sm:p-2 border-2 border-[#E7FE29] cursor-pointer transition-transform active:scale-95">
            <div className="rounded-xl py-3 px-6 sm:py-3.5 sm:px-8 bg-[#E7FE29] font-bold text-neutral transition-colors hover:bg-[#d4e924]">
              Claim Free Credit
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
