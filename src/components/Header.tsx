import { Oy } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    // dark:bg-slate-900 dark:text-white
    <div className=" bg-white z-auto   opacity-95 pt-5 pb-5 top-0 left-0 right-0  fixed shadow-lg shadow-black-500/50  xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2  ">
      <div className="container  mx-auto flex items-center   justify-between">
        <p className="leading-8 font-extrabold text-lg ">Where in the world?</p>
        <div className="flex"><p > <Image src={Oy} alt="Oy" /> Dark Mode</p></div>
      </div>
    </div>
  );
};

export default Header;
