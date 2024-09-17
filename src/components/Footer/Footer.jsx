import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-white px-4 py-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>

          <NavLink
            to="/react-router/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/react-router/about-us"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About US
          </NavLink>
          <NavLink
            to="/react-router/contact-us"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/react-router/github"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            GitHub
          </NavLink>
        </div>

        {/* Social Media */}
        <div className="">
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="www.linkedin.com/in/waasim-ansari-39741b28b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="text-2xl fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/waasimAnsari786/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands text-2xl fa-github"></i>
            </a>
            <a
              href="https://waasimansari786.github.io/waasim-s-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-address-book text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-left">
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p>New Alliance Pipe Factory</p>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p className="mt-4">
            &copy; 2024 New Alliance Pipe Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
