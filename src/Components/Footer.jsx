import footerLogo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="pb-8 pt-64 md:pt-72 bg-[#06091A] text-white">
      <div className="max-w-330 mx-auto px-4 sm:px-2 flex flex-col items-center">
        <div className="mb-12 md:mb-16">
          <img
            src={footerLogo}
            alt="Footer Logo"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full mb-12 md:mb-18">
          <div className="space-y-4 max-w-sm">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-white/60 leading-7 text-sm md:text-base">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-white/60 text-sm md:text-base">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-white/60 leading-7 text-sm md:text-base">
              Subscribe to our newsletter for the latest updates.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 rounded-t-xl sm:rounded-t-none sm:rounded-l-xl w-full bg-white text-neutral outline-none"
              />
              <button
                type="submit"
                className="bg-linear-to-r from-[#E7FE29] to-[#f9d423] px-6 py-3 rounded-b-xl sm:rounded-b-none sm:rounded-r-xl text-neutral font-bold cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="border-white/10 w-full" />

      <div className="text-center pt-8 px-4">
        <span className="text-white/40 text-sm">
          ©2026 Maruf Billah | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
