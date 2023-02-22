import classes from "./index.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Searchbar from "components/Searchbar";
// import HamburgerMenu from "components/burger/hamburger";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const propss =
    "cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-white hover:text-black";

  return (
    <div className={classes.main}>
      <div className="">
        <Link href="/" className="inline-flex items-center p-2 mr-4">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-white h-8 w-8 mr-2"
          >
            <path />
          </svg>
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            duka
          </span>
        </Link>
      </div>
      <div><Searchbar /></div>
      <button
        onClick={handleClick}
        className="inline-flex p-3 hover:bg-white rounded lg:hidden text-white hover:text-black ml-auto hover:text-white outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? "" : "hidden"
        } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <Link href="/" className={propss}>
            Home
          </Link>
          <Link href="/store" className={propss}>
            Store
          </Link>
          <Link href="/about" className={propss}>
            About
          </Link>
          <Link href="/Contactus" className={propss}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
