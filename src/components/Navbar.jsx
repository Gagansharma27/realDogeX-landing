import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../images/logo.svg";

// Reuseable component for an individual navbar item
const NavBarItem = ({ title, classprops }) => (
  <li
    className={`mx-4 cursor-pointer hover:opacity-75 transition-opacity ${classprops}`}
  >
    {title}
  </li>
);

const Navbar = () => {
  // Handle mobile navbar state
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const navbarItems = ["About", "Exchange", "Support", "Blog"];

  return (
    <nav className="w-full flex mf:justify-center justify-between items-center p-4">
      <div className="mf:flex-[0.5] flex-initial justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-40 cursor-pointer" /> */}
        <p className="text-white font-mono text-4xl">realDogeX</p>
      </div>
      <ul className="text-white mf:flex hidden list-none flex-row justify-between items-center flex-initial">
        {/* Create navbar with a dynamic loop */}
        {navbarItems.map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] transition-all">
          Dashboard
        </li>
      </ul>
      <div className="flex relative">
        {/* Display mobile navbar */}
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white mf:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white mf:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl mf:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navbarItems.map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
