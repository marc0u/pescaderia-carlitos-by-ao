import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [barHidden, setBarHidden] = useState(true);
  return (
    <nav className="bg-blue-900 py-2">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-indigo-600">
            <img
              className="rounded-full h-24"
              src="/logo.jpg"
              alt="todo list logo"
            />
          </a>
          <button
            className="px-3 py-1 rounded text-white opacity-50 hover:opacity-75 md:hidden"
            onClick={() => setBarHidden(!barHidden)}
          >
            <FaBars className="h-8" />
          </button>
        </div>

        <div
          className={`${
            barHidden ? "hidden" : "flex"
          } md:flex flex-col text-center md:flex-row md:ml-auto mt-3 md:mt-0`}
        >
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Pescados
          </a>
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Mariscos
          </a>
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Nosotros
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
