import dollarIcon from "../assets/dollar.png";
import navLogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm mb-6 sticky top-0">
      <div className="navbar max-w-330 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-6 w-52 p-2 shadow"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={navLogo} alt="" />
          </a>
        </div>
        <div className="navbar-end gap-8">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Fixture</a>
              </li>
              <li>
                <a href="">Teams</a>
              </li>
              <li>
                <a href="">Schedules</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2.5 px-5 py-4 rounded-xl border border-[#131313]/10 cursor-pointer hover:bg-[#131313]/10">
            <p className="font-semibold">
              <span>0</span> Coins
            </p>
            <img src={dollarIcon} alt="" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
