import React, { useState } from "react";
import logo from "../assets/images/water-level.png";
import Image from "next/image";

function Nav() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const setPopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const removePopup = () => {
    setPopupVisible(false);
  };

  return (
    <nav className="pt-10 pb-4 mb-12 flex justify-between pl-10 sticky top-0 z-10 bg-white">
      <div className="flex flex-row gap-3">
        <Image src={logo} alt="logo" width={30} />

        <h1 className="hidden sm:flex text-2xl font-burtons ">WATER LEVEL</h1>
      </div>
      <ul>
        <div className="flex flex-row space-x-4 mr-10">
          <div className="flex gap-4 md:gap-4 text-slate-800">
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
                About Us
              </a>
            </li>
          </div>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-blue-400 
                 text-white cursor-pointer px-4 py-2 border-none rounded-2xl ml-4 hover:opacity-80 transition"
              onClick={() => setPopup()}
            >
              Download
            </a>

            {isPopupVisible && (
              <div
                id="dropdownNavbar"
                className="z-10 absolute  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 mt-5 right-2"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.rmutt.waterlevel"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Android
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://apps.apple.com/th/app/water-level/id6466616498?l=th"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      iOS
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
