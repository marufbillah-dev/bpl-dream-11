import dollarIcon from "../assets/dollar.png";
import navLogo from "../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm mb-6 sticky top-0 z-50">
      <div className="navbar max-w-330 mx-auto px-4 sm:px-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg border border-neutral/5"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Fixture</a>
              </li>
              <li>
                <a href="/">Teams</a>
              </li>
              <li>
                <a href="/">Schedules</a>
              </li>
            </ul>
          </div>

          <a href="/" className="flex items-center">
            <img src={navLogo} alt="Logo" className="h-10 sm:h-12 w-auto" />
          </a>
        </div>

        <div className="navbar-end gap-2 sm:gap-8">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-neutral/70 flex-nowrap">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Fixture</a>
              </li>
              <li>
                <a href="/">Teams</a>
              </li>
              <li>
                <a href="/">Schedules</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center shrink-0 gap-2 px-3 py-2 sm:px-5 sm:py-3 rounded-xl border border-neutral/10 cursor-pointer hover:bg-neutral/5 transition-colors">
            <p className="font-bold text-sm sm:text-base whitespace-nowrap">
              {coin} Coins
            </p>
            <img src={dollarIcon} alt="Coins" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
