import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function AppBar({ logoSrc, children }) {
  const [barHidden, setBarHidden] = useState(true);
  return (
    <nav className="bg-blue-900 py-2">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <img
                className="rounded-full h-24"
                src={logoSrc}
                alt="todo list logo"
              />
            </a>
          </Link>
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
          {children}
        </div>
      </div>
    </nav>
  );
}
