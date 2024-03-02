import { Afgan, Alad, Alba, Algariya, Amerika, Brazil, Germany, Island } from "@/assets/images";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-28   xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2  bg-[#FAFAFA]">
      <div className="flex flex-wrap justify-between items-baseline mb-11" >
        <input
          type="search"
          placeholder="Searching..."
          className="w-80  md:w-96 p-4 rounded-lg border-slate-500 border-2 outline-white border-[#fff]"
        />
        <select
          name="all"
          id="all"
          className="mt-5 p-3 bg-white rounded-lg border-slate-500 border-2 outline-0"
        >
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-16 justify-center">
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Germany}
            alt="Germany"
          />
          <div className="texts p-5">
            <p className=" font-bold size-auto">Germany</p>
            <p className="pt-5">Population: 81,770,990</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Amerika}
            alt="Amerika"
          />
          <div className="texts p-5">
            <p className=" font-bold size-15">United States of America</p>
            <p className="pt-5">Population: 323,947,000</p>
            <p>Region: Americas</p>
            <p>Capital: Washington, D.C.</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Brazil}
            alt="Brazil"
          />
          <div className="texts p-5">
            <p className=" font-bold size-auto">Brazil</p>
            <p className="pt-5">Population: 206,135,893</p>
            <p>Region: Americas</p>
            <p>Capital: Brasília</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Island}
            alt="Island"
          />
          <div className="texts p-5">
            <p className=" font-bold size-auto">Iceland</p>
            <p className="pt-5">Population: 334,300</p>
            <p>Region: Europe</p>
            <p>Capital: Reykjavík</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Afgan}
            alt="Afgan"
          />
          <div className="texts p-5">
            <p className=" font-bold size-auto">Afghanistan</p>
            <p className="pt-5">Population: 27,657,145</p>
            <p>Region: Asia</p>
            <p>Capital: Kabul</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Alad}
            alt="Alad"
          />
          <div className="texts p-5">
            <p className=" font-bold size-15">Åland Islands</p>
            <p className="pt-5">Population: 28,875</p>
            <p>Region: Europe</p>
            <p>Capital: Mariehamn</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Alba}
            alt="Alba"
          />
          <div className="texts p-5">
            <p className=" font-bold size-auto">Albania</p>
            <p className="pt-5">Population: 2,886,026</p>
            <p>Region: Europe</p>
            <p>Capital: Tirana</p>
          </div>
        </div>
        <div className=" bg-white rounded-lg outline-none overflow-hidden hover: transition duration-500 cursor-pointer scale-95 object-cover hover:shadow-2xl">
          <Image
            className="max-w-xs transition duration-300 ease-in-out hover:scale-100"
            src={Algariya}
            alt="Algariya"
          />
          <div className="texts p-5">
            <p className=" font-bold size-auto">Algeria</p>
            <p className="pt-5">Population: 40,400,000</p>
            <p>Region: Africa</p>
            <p>Capital: Algiers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
