import React from "react";

function Nav() {
  return (
    <nav className="pt-10 pb-4 mb-12 flex justify-between pl-10 sticky top-0 z-10">
      <h1 className="text-2xl font-burtons ">WATER LEVEL</h1>
      <ul>
        <div className="flex flex-row space-x-4 mr-10">
          <div className="flex-row gap-4 hidden sm:hidden md:flex md:gap-4">
            <li>
              <a href="#home" className="hover:text-cyan-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#info" className="hover:text-cyan-500 transition">
                Info
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-500 transition">
                About
              </a>
            </li>
          </div>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-blue-400 
                 text-white px-4 py-2 border-none rounded-2xl ml-4 hover:opacity-80 transition"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Install
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
