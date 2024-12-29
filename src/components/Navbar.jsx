import React from "react";
import { Menu } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-[#1e2124] to-[#292b2f] text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="text-3xl font-extrabold">
          <Link
            to="/"
            className="text-[#7dd3fc] no-underline hover:underline transition-opacity duration-300"
          >
            CalmCord
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-white text-lg font-semibold no-underline hover:underline transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            {/* Updated path for "Ask" */}
            <Link
              to="/ask"
              className="text-white text-lg font-semibold no-underline hover:underline transition-colors duration-300"
            >
              Ask
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg font-semibold no-underline hover:underline transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg font-semibold no-underline hover:underline transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu as="div" className="relative">
            <Menu.Button className="text-white text-2xl hover:opacity-90 transition-opacity duration-300">
              <FiMenu />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-48 bg-[#292b2f] text-white rounded-lg shadow-lg z-50">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className={`block px-4 py-2 ${
                      active ? "bg-[#1e2124]" : ""
                    } no-underline hover:underline`}
                  >
                    Home
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/ask" // Updated path for "Ask"
                    className={`block px-4 py-2 ${
                      active ? "bg-[#1e2124]" : ""
                    } no-underline hover:underline`}
                  >
                    Ask
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/about"
                    className={`block px-4 py-2 ${
                      active ? "bg-[#1e2124]" : ""
                    } no-underline hover:underline`}
                  >
                    About
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/contact"
                    className={`block px-4 py-2 ${
                      active ? "bg-[#1e2124]" : ""
                    } no-underline hover:underline`}
                  >
                    Contact
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>

        {/* Login and Register Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/auth"
            className="text-lg font-semibold text-white border border-[#7dd3fc] px-4 py-2 rounded-lg no-underline hover:underline hover:bg-[#7dd3fc] hover:text-white transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/auth"
            className="text-lg font-semibold text-white bg-[#7dd3fc] px-4 py-2 rounded-lg no-underline hover:underline hover:bg-[#5daddb] transition-colors duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
