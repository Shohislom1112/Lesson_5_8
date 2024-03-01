import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-28   xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2 ">
      <div className="flex flex-wrap justify-between items-baseline">
        <input
          type="search"
          placeholder="Searching..."
          className="w-80  md:w-96 p-4 rounded-lg"
        />
        <select name="all" id="all" className="mt-5 p-3 rounded-lg">
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default HomePage;
