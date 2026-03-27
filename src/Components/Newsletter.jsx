const Newsletter = () => {
  return (
    <div className="max-w-330 mx-auto px-2">
      <div className=" bg-white/15 rounded-3xl border-2 border-white p-6">
        <div className="flex flex-col justify-center items-center gap-6 bg-[url(/bg-shadow.png)] bg-cover bg-no-repeat bg-center py-22 border border-neutral/10 rounded-2xl text-center max-sm:px-2">
          <h2 className="text-neutral font-bold text-[2rem] ">
            Subscribe to our Newsletter
          </h2>
          <p className="font-inter font-medium text-[1.25rem] text-neutral/70">
            Get the latest updates and news right in your inbox!
          </p>
          <form
            action=""
            className="flex max-sm:flex-col gap-4 w-full justify-center"
          >
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="Enter your email"
              className="px-7.5 py-4.5 rounded-xl border border-neutral/15 max-w-100 w-full placeholder:text-neutral/40 outline-amber-500/50 max-sm:max-w-full"
            />
            <button
              type="submit"
              className="bg-[url(/btn-bg.png)] bg-cover bg-no-repeat bg-center px-7.5 py-4.5 rounded-xl text-neutral font-bold cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
