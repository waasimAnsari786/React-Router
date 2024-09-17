import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="w-1/3">
          <Link to="/">
            <h1 className="text-3xl font-bold">
              Your
              <span className="text-3xl font-bold text-orange-700"> Logo</span>
            </h1>
          </Link>
        </div>

        {/* Menu Section */}
        <div className="w-1/3">
          <nav>
            <ul className="flex justify-around">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-700 font-bold"
                      : "text-black-900 font-bold"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
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
                  to="/contact-us"
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
                  to="/github"
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
        </div>

        {/* Buttons Section */}
        <div className="w-1/3 text-right">
          <Link to="/">
            <button className="bg-orange-700 text-white px-4 py-2 rounded-lg mr-2 hover:bg-orange-800">
              Log In
            </button>
          </Link>

          <Link to="/">
            <button className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
