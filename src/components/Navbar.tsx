import React from "react";
import { NavLink } from "react-router-dom";
import image from '../assets/react.svg';

const Navbar = (): React.ReactElement => {
  const isActiveLink = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="/"
            >
              <img
                className="h-10 w-auto"
                src={image}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={isActiveLink}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={isActiveLink}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={isActiveLink}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
