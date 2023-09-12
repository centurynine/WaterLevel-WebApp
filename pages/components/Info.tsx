import React from "react";
import TypewriterComponent from "typewriter-effect";

function Info() {
  return (
    <div className="">
      <div
        id="about"
        className="flex flex-col xl:flex-row items-center justify-center mt-40">
        <div className="mx-10 md:mx-0 mb-20 md:mb-10 md:ml-56 md:mr-40 flex flex-col items-center justify-center">
          <span className="my-2 justify-center text-2xl md:text-6xl text-cyan-500 flex flex-row gap-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
            <TypewriterComponent
              options={{
                strings: "Water Level",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <div className=" flex flex-row gap-2 justify-center text-3xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
            <span className="">Flood Warning System Around the Drain Area</span>
          </div>
          <p className="text-slate-700 text-1xl md:text-2xl mr-5 text-center"></p>
        </div>
        <div className="xl:mr-56 relative ">
          <div className="w-56 absolute inset-0 ml-8 mt-20 hidden xl:block"></div>
        </div>
      </div>
    </div>
  );
}

export default Info;
