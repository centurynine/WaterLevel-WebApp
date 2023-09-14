import React from "react";
import logo from "../assets/images/water-level.png";
import Image from "next/image";

function Nav() {
  return (
    <nav className="pt-10 pb-4 mb-12 flex justify-between pl-10 sticky top-0 z-10 bg-white">
      <div className="flex flex-row gap-3">

    <Image  src={logo} alt="logo" width={30}/>

        <h1 className="hidden sm:flex text-2xl font-burtons ">WATER LEVEL</h1></div>
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
           
          </div>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-blue-400 
                 text-white px-4 py-2 border-none rounded-2xl ml-4 hover:opacity-80 transition"
              href="https://drive.google.com/file/d/1GNFcbTrnXjPAAuJIW_Khufo42jPcpUgs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
