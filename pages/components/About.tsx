import React from "react";
import motherboard from "../assets/images/motherboard.png";
import Image from "next/image";
function About() {
  return (
    <div className="flex flex-col" id="about">
       <div className="text-center text-5xl">
        About
       </div> 
       <div className="flex flex-row justify-center">
       <div>
            <Image src={motherboard} alt="motherboard" width={500} height={500}/>
         </div><div>
            
         </div>
       </div> 
    </div>
  );
}

export default About;
