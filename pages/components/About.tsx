import React from "react";
import motherboard from "../assets/images/motherboard.png";
import Image from "next/image";
function About() {
  return (
    <div className="flex flex-col" id="about">
      <div className="text-center text-5xl my-10">About Us</div>
      <div className="flex px-3 flex-col text-center gap-y-4 justify-center items-center">
        <div className="text-2xl  ">นักศึกษาวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์ ชั้นปีที่ 4 มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</div>
        <div className="text-2xl"> 1. นายสรัล วรรณภูงา lowlifeix@gmail.com </div>
        <div className="text-2xl"> 2. นายบัณฑิต สงค์ประชา nest_0894@hotmail.com</div>
        <div className="text-2xl"> 3. นายศิวกร กาญธนะบัตร siwakorn23456@gmail.com</div>
      </div>
      <div className="my-40"></div>
    </div>
  );
}

export default About;
