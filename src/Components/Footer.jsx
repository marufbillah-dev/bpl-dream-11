import footerLogo from "../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="pb-8 pt-60 bg-[#06091A] text-white">
      <div className="max-w-330 mx-auto px-2 flex flex-col justify-center items-center">
        <img src={footerLogo} alt="" className="mb-16" />
        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:text-center max-md:gap-8 w-full mb-18">
          <div className="about-us max-w-72 space-y-4">
            <h3>About Us</h3>
            <p className="text-white/60 leading-7">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="quick-links max-w-72 space-y-4">
            <h3>Quick Links</h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="">▪ Home</a>
              </li>
              <li>
                <a href="">▪ Services</a>
              </li>
              <li>
                <a href="">▪ About</a>
              </li>
              <li>
                <a href="">▪ Contact</a>
              </li>
            </ul>
          </div>
          <div className="subscribe space-y-4">
            <div className="max-w-72 space-y-4 max-md:mx-auto">
              <h3>Subscribe</h3>
              <p className="text-white/60 leading-7">
                Subscribe to our newsletter for the latest updates.
              </p>
            </div>

            <form action="">
              <input
                type="email"
                name="email"
                id="footer-email-input"
                placeholder="Enter your email"
                className="px-7.5 py-3.5 rounded-l-xl max-w-60 w-full bg-white text-neutral placeholder:text-neutral/40 outline-none"
              />
              <button
                type="submit"
                className="bg-[url(/btn-bg.png)] bg-cover bg-no-repeat bg-center px-7.5 py-3.5 rounded-r-xl text-neutral font-bold cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className="border-white/15 w-full" />
      <div className="text-center pt-8">
        <span className="text-white/60">
          @2026 &copy; Maruf Billah | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
