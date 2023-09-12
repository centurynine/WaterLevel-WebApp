import React from "react";
import TypewriterComponent from "typewriter-effect";
import ImageGallery from "react-image-gallery";
import motherboard from "../assets/images/motherboard.png";
import database from "../assets/images/database.png";
import smartphone from "../assets/images/smartphone.png";
import Image from "next/image";
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
        className="flex flex-col xl:flex-row items-center justify-center mt-40"
      >
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
            <span className="mb-32">
              Flood Warning System Around the Drain Area
            </span>
          </div>
          <ImageGallery items={images} />
          <p className="text-slate-700 text-1xl md:text-2xl mr-5 text-center"></p>
        </div>
        <div className=" relative ">
          <div className="w-56 absolute inset-0 ml-8 mt-20 hidden xl:block"></div>
        </div>
      </div>

      <div className="flex flex-col pt-10" id="about">
        <div className=" text-center">
          <div className=" flex flex-row gap-2  justify-center text-3xl md:text-4xl font-medium bg-clip-text text-cyan-500 ">
            <span className="mb-32">
              ระบบแจ้งเตือนระดับน้ำท่วมบริเวณทางน้ำรอระบาย
            </span>
          </div>

          {/* Node */}
           
          <div className="flex flex-row justify-center items-center gap-x-44 mb-20">
            <div className="">
              <Image
                src={motherboard}
                alt="profile"
                width={400}
                className="rounded-full object-center mx-auto w-2/3 xl:w-full hover:scale-110 transition"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-6xl my-10 text-slate-800">Node</span>

              <span className="text-2xl text-slate-700">
                อุปกรณ์ที่ทำหน้าที่รับข้อมูลจากเซ็นเซอร์เพื่อ
              </span>
              <span className="text-2xl text-slate-700">
                วัดระดับน้ำแล้วส่งค่าไปยังฐานข้อมูล
              </span>
            </div>
          </div>

          {/* Firebase */}
          <div className="flex flex-row justify-center items-center gap-x-44 mb-40">
            <div className="flex flex-col">
              <span className="text-6xl my-10 text-slate-800">Firebase</span>

              <span className="text-2xl text-slate-700">
                ฐานข้อมูลซึ่งทำหน้าที่เก็บข้อมูลที่ได้รับมาจาก Node
              </span>
              <span className="text-2xl text-slate-700">
                และเป็นสื่อกลางในการส่งข้อมูลระหว่าง Node และ Application
              </span>
            </div>
            <div className="">
              <Image
                src={database}
                alt="database"
                width={300}
                className=" object-center mx-auto w-2/3 xl:w-full hover:scale-110 transition"
              />
            </div>
          </div>

          {/* Application */}
          <div className="flex flex-row justify-center items-center gap-x-44 mb-40">
            <div className="">
              <Image
                src={smartphone}
                alt="smartphone"
                width={270}
                className=" object-center mx-auto w-2/3 xl:w-full hover:scale-110 transition"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-6xl my-10 text-slate-800">Mobile Application</span>
              <span className="text-2xl text-slate-700">
                แอปพลิเคชันที่ทำหน้าที่แสดงผลข้อมูลประวัติระดับน้ำ
              </span>
              <span className="text-2xl text-slate-700">
                และแจ้งเตือนเมื่อระดับน้ำเกินระดับทีมีการเพิ่มสูงขึ้นหรือต่ำลง
              </span>
            </div>
          </div> 
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default Info;
