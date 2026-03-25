const Newsletter = () => {
  return (
    <section className="max-w-330 mx-auto px-4 sm:px-2 relative -mb-40 md:-mb-52 z-10">
      <div className="bg-white/15 rounded-3xl border-2 border-white p-2 md:p-6 backdrop-blur-sm">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-6 bg-white bg-[url('/bg-shadow.png')] bg-cover bg-no-repeat bg-center py-12 md:py-22 px-4 border border-neutral/10 rounded-2xl text-center">
          <h2 className="text-neutral font-bold text-2xl md:text-[2rem] leading-tight">
            Subscribe to our Newsletter
          </h2>

          <p className="font-inter font-medium text-base md:text-[1.25rem] text-neutral/70 max-w-lg">
            Get the latest updates and news right in your inbox!
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-xl border border-neutral/15 w-full placeholder:text-neutral/40 outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-linear-to-r from-[#E7FE29] to-[#f9d423] px-8 py-4 rounded-xl text-neutral font-bold cursor-pointer hover:shadow-lg active:scale-95 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
