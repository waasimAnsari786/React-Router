import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  // State to control the visibility of the navbar and buttons
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu when the bars icon is clicked
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo Section */}
        <div className="w-1/1">
          <Link to="/react-router/">
            <h1 className="text-3xl font-bold">
              Your
              <span className="text-3xl font-bold text-orange-700"> Logo</span>
            </h1>
          </Link>
        </div>

        {/* Bars Icon for mobile screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange-700 text-3xl focus:outline-none"
          >
            &#9776; {/* Bars icon */}
          </button>
        </div>

        {/* Navbar and Buttons Wrapper */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:justify-between lg:items-center lg:static lg:w-auto absolute top-full left-0 w-full bg-gray-200 lg:bg-transparent z-50 p-4 lg:p-0`}
        >
          {/* Menu Section */}
          <nav>
            <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-6">
              <li>
                <NavLink
                  to="/react-router/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-700 font-bold"
                      : "text-black-900 font-bold"
                  }
                  end // Ensures exact matching
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/react-router/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-700 font-bold"
                      : "text-black-900 font-bold"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/react-router/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-700 font-bold"
                      : "text-black-900 font-bold"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/react-router/github"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-700 font-bold"
                      : "text-black-900 font-bold"
                  }
                >
                  GitHub
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Buttons Section */}
          <div className="flex flex-col space-y-1 lg:space-y-0 lg:flex-row lg:space-x-4 mt-4 lg:mt-0 lg:ml-8">
            <Link to="/react-router/">
              <button className="bg-orange-700 text-white px-4 py-2 rounded-lg mr-2 hover:bg-orange-800 lg:mr-0">
                Log In
              </button>
            </Link>

            <Link to="/react-router/">
              <button className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
