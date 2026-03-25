import heroLogo from "../assets/banner-main.png";

const Hero = () => {
  return (
    <section className="max-w-330 mx-auto px-2">
      <div className="rounded-3xl py-16 text-center flex flex-col gap-6 items-center bg-[#131313] bg-[url(/bg-shadow.png)] bg-cover bg-no-repeat bg-center mb-22">
        <img src={heroLogo} alt="" />
        <div className="hero-contents space-y-6">
          <h1 className="font-bold text-[40px] text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="font-inter text-2xl font-medium text-white/70">
            Beyond Boundaries Beyond Limits
          </p>
          <button className="rounded-2xl p-2 border-2 border-[#E7FE29] cursor-pointer">
            <div className="rounded-lg p-3.5 bg-[#E7FE29] font-bold text-neutral">
              Claim Free Credit
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
