import classes from "./index.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Searchbar from "components/Searchbar";
// import HamburgerMenu from "components/burger/hamburger";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [searchRes, setSearchRes] = useState([]);

  const handleSearch = () => {
    setSearchRes(res);
  };
  const handleClick = () => {
    setActive(!active);
  };

  const styling =
    "cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-[#ffe7cc] hover:text-black";

  return (
    <div className="flex w-[82%] mx-auto my-5">
      <div className="">
        <Link href="/" className="inline-flex items-center p-2 mr-4">
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            duka
          </span>
        </Link>
      </div>
      <div>
        <Searchbar onSearch={handleSearch} />
        <ul>
          {searchRes.map(() => (
            <li key={res.id}>{res.title}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleClick}
        className="inline-flex px-3 py-5 rounded lg:hidden text-white hover:text-black ml-auto hover:bg-[#ffe7cc] outline-none"
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
        <div className="lg:inline-flex gap-3 text-[18px] lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ">
          <Link href="/" className={styling}>
            Home
          </Link>
          <Link href="/store" className={styling}>
            Store
          </Link>
          <Link href="/about" className={styling}>
            About
          </Link>
          <Link href="/Contactus" className={styling}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
