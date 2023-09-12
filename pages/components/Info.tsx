import React from "react";
import TypewriterComponent from "typewriter-effect";
import ImageGallery from "react-image-gallery";

const images = [
 
  {
    original: "https://i.ibb.co/mJXZJ3t/Screenshot-1694452768.png",
    thumbnail: "https://i.ibb.co/mJXZJ3t/Screenshot-1694452768.png",
  },
  {
    original: "https://i.ibb.co/9hdjw5P/Screenshot-1694452849.png",
    thumbnail: "https://i.ibb.co/9hdjw5P/Screenshot-1694452849.png",
  },
  {
    original: "https://i.ibb.co/5RqbSbq/Screenshot-1694452866.png",
    thumbnail: "https://i.ibb.co/5RqbSbq/Screenshot-1694452866.png",
  },
  {
    original: "https://i.ibb.co/dgJpnwT/Screenshot-1694452881.png",
    thumbnail: "https://i.ibb.co/dgJpnwT/Screenshot-1694452881.png",
  },
  {
    original: "https://i.ibb.co/MMHDXcp/Screenshot-1694452883.png",
    thumbnail: "https://i.ibb.co/MMHDXcp/Screenshot-1694452883.png",
  },
];


function Info() {
  return (
    <div id="info">
      <div
        id="info"
        className="flex flex-col xl:flex-row items-center justify-center mt-40">
        <div className=" mb-20 md:mb-10 md:ml-56 md:mr-40 flex flex-col items-center justify-center">
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
            <span className="mb-32">Flood Warning System Around the Drain Area</span>
          </div>
          <ImageGallery items={images} /> 
          <p className="text-slate-700 text-1xl md:text-2xl mr-5 text-center"></p>
        </div>
        <div className=" relative ">
          <div className="w-56 absolute inset-0 ml-8 mt-20 hidden xl:block"></div>
        </div>
      </div>
    </div>
  );
}

export default Info;
