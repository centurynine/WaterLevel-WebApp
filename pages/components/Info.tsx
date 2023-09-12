import React, { useEffect, useState } from "react";
import { TransitionGroup, Transition } from "react-transition-group";
import TypewriterComponent from "typewriter-effect";
import ImageGallery from "react-image-gallery";
import motherboard from "../assets/images/motherboard.png";
import database from "../assets/images/database.png";
import smartphone from "../assets/images/smartphone.png";
import logo from "../assets/images/water-level.png";
import wifi from "../assets/images/wifi.png";
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
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const element = document.getElementById("element");
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
 

  
  return (
    <div>
      <div
         
        className="flex flex-col xl:flex-row items-center justify-center mt-40"
      >
        <div className=" mb-20 md:mb-10 md:ml-56 md:mr-40 flex flex-col items-center justify-center ">
          <span className="my-2 justify-center text-4xl md:text-6xl text-cyan-500 flex flex-row gap-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
            <TypewriterComponent
              options={{
                strings: "Water Level Project.",
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <div className=" flex flex-row gap-2 justify-center text-xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400 text-center">
            <span className="mb-32">
              Flood Warning System Around the Drain Area.
            </span>
          </div>
          <ImageGallery items={images} />
          <p className="text-slate-700 text-1xl md:text-1xl mr-5 text-center"></p>
        </div>
      </div>
      <hr className="mx-60" id="element"></hr>
      <div className="flex flex-col pt-10 " id="element1">
        <div className="text-center">
          <div className="flex flex-row gap-2 justify-center text-3xl md:text-4xl font-medium bg-clip-text text-cyan-500 ">
            <span className="mb-2"  id="info">ขั้นตอนการทำงานของระบบ</span>
          </div>
           
          {/* Node */}
          {isVisible && (
          <div > 
          <div className="flex flex-row justify-center items-center gap-x-2 px-10 md:px-0 md:gap-x-24 mb-20 md:slide-in-from-left">
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

              <span className="text-xl md:text-2xl text-slate-700">
                อุปกรณ์ที่ทำหน้าที่รับข้อมูลจากเซ็นเซอร์เพื่อ
              </span>
              <span className="text-xl md:text-2xl text-slate-700">
                วัดระดับน้ำแล้วส่งค่าไปยังฐานข้อมูล
              </span>
            </div>
          </div>

          {/* Wifi */}

          <div className="flex flex-row justify-center items-center gap-x-2 px-10 md:px-0 md:gap-x-44 mb-40 md:slide-in-from-right">
            <div className="flex flex-col">
              <span className="text-6xl my-10 text-slate-800">Connection</span>

              <span className="text-xl md:text-2xl text-slate-700">
                ใช้การสื่อสารผ่านระบบอินเทอร์เน็ต
              </span>
              <span className="text-xl md:text-2xl text-slate-700">
                โดยใช้แอร์การ์ดเป็นตัวกระจายสัญญาณให้ Node
              </span>
            </div>
            <div className="">
              <Image
                src={wifi}
                alt="wifi"
                width={300}
                className=" object-center mx-auto w-2/3 xl:w-full hover:scale-110 transition"
              />
            </div>
          </div>

          {/* Firebase */}

          <div className="flex flex-row justify-center items-center gap-x-2 px-10 md:px-0 md:gap-x-44 mb-40 md:slide-in-from-left">
            <div className="">
              <Image
                src={database}
                alt="database"
                width={300}
                className=" object-center mx-auto w-2/3 xl:w-full hover:scale-110 transition"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-6xl my-10 text-slate-800">Firebase</span>

              <span className="text-xl md:text-2xl text-slate-700">
                ฐานข้อมูลซึ่งทำหน้าที่เก็บข้อมูลที่ได้รับมาจาก Node
              </span>
              <span className="text-xl md:text-2xl text-slate-700">
                และเป็นสื่อกลางในการส่งข้อมูลระหว่าง Node และ Application
              </span>
            </div>
          </div>

          {/* Application */}
          <div className="" id="element4"></div>

          <div className="flex flex-row justify-center items-center gap-x-2 px-10 md:px-0 md:gap-x-44 mb-40 md:slide-in-from-right">
            <div className="flex flex-col">
              <span className="text-6xl my-10 text-slate-800">
                Mobile Application
              </span>
              <span className="text-xl md:text-2xl text-slate-700">
                แอปพลิเคชันที่ทำหน้าที่แสดงผลข้อมูลประวัติระดับน้ำ
              </span>
              <span className="text-xl md:text-2xl text-slate-700">
                และแจ้งเตือนเมื่อระดับน้ำมีการเพิ่มสูงขึ้นหรือต่ำลง
              </span>
            </div>
            <div className="">
              <Image
                src={smartphone}
                alt="smartphone"
                width={270}
                className="object-center mx-auto w-3/3 xl:w-full hover:scale-110 transition"
              />
            </div>
          </div>

          {/*  */}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Info;
