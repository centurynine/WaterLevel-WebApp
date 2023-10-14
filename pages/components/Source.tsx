import Image from 'next/image';
import React from 'react'
import layers from "../assets/images/layers.png";

function Source() {
    return (
        <div id='source'>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-medium bg-clip-text text-cyan-500">
              Source Code
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 my-8">
            <div className="w-28  md:w-auto bg-slate-100 px-8 md:px-10 object-center py-4 rounded-xl hover:scale-110 transition">
              <a target='_blank' href='https://github.com/centurynine/WaterLevel-Project'><Image className="mx-auto" src={layers} alt="flutter" width={100} height={100} /></a>
            </div>
          </div>
          <div className="mb-40"></div>
        </div>
      );
}

export default Source