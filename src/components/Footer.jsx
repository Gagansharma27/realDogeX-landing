import React from "react";

import logo from "../images/logo.svg";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <p className="text-white font-mono text-4xl">realDogeX</p>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:opacity-75 transition-opacity">
          About
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:opacity-75 transition-opacity">
          Exchange
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:opacity-75 transition-opacity">
          Support
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:opacity-75 transition-opacity">
          Blog
        </p>
      </div>
    </div>

    {/* Info section */}
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Join us today to do crypto - the right way
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@realDogeX.cc
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    {/* Extreme bottom section */}
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@realDogeX 2023</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
