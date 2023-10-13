import React from "react";
import Image from "next/image";

import flutter from "../assets/images/flutter.png";
import c from "../assets/images/c++.png";
import firebase from "../assets/images/firebase.png";
import vscode from "../assets/images/vscode.png";
import platformio from "../assets/images/platformio.png";
import git from "../assets/images/git.png";

function Tools() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl font-medium bg-clip-text text-cyan-500">
          ภาษาและเครื่องมือที่ใช้
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 my-8">
        <div className="w-28  md:w-auto bg-slate-100 px-2 md:px-10 object-center py-4 rounded-xl hover:scale-110 transition">
          <Image className="mx-auto" src={flutter} alt="flutter" width={40} height={40} />
        </div>
        <div className="w-28 md:w-auto bg-slate-100 px-2 md:px-10 object-center py-4 rounded-xl hover:scale-110 transition">
          <Image className="mx-auto" src={c} alt="c++" width={50} height={50} />
        </div>
        <div className="w-28 md:w-auto bg-slate-100 px-2 md:px-10 object-center py-4 rounded-xl hover:scale-110 transition">
          <Image className="mx-auto" src={firebase} alt="firebase" width={60} height={60} />
        </div>
        <div className="w-28 md:w-auto bg-slate-100 px-2 md:px-10 object-center py-4 rounded-xl hover:scale-110 transition">
          <Image className="mx-auto" src={platformio} alt="platformio" width={60} height={60} />
        </div>
        <div className="w-28 md:w-auto bg-slate-100 px-2 md:px-10 object-center py-4 rounded-xl hover:scale-110 transition">
          <Image className="mx-auto" src={vscode} alt="vscode" width={50} height={50} />
        </div>
        <div className="w-28 md:w-auto bg-slate-100 px-2 md:px-10 object-center py-4 rounded-xl hover:scale-110 transition">
          <Image className="mx-auto" src={git} alt="git" width={50} height={50} />
        </div>
      </div>
      <div className="mb-40"></div>
    </div>
  );
}

export default Tools;
