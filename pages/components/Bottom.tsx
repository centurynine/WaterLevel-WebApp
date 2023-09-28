import React from "react";
import appstore from "../assets/images/app-store.png";
import playstore from "../assets/images/playstore.png";
import Image from "next/image";

function Bottom() {
  return (
    <div className="bottom-0 w-full z-10">
      <div className="flex flex-row justify-center mr-10 mb-10 gap-10">
        <div id="ios" className="">
          <a
            href="https://apps.apple.com/th/app/water-level/id6466616498?l=th"
            target="_blank"
          >
            <Image
              className="object-center"
              src={appstore}
              alt="logo"
              width={80}
            />
          </a>
        </div>
        <div id="ios" className="">
          <a
            href="https://play.google.com/store/apps/details?id=com.rmutt.waterlevel"
            target="_blank"
          >
            <Image src={playstore} alt="logo" width={80} />
          </a>
        </div>
      </div>
      <div className="pb-1"></div>
    </div>
  );
}

export default Bottom;
