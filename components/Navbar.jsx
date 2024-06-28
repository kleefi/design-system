"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  const [optionMenu, setOptionMenu] = useState(() => {
    const savedOption = localStorage.getItem("optionMenu");
    return savedOption !== null ? parseInt(savedOption) : 1;
  });

  useEffect(() => {
    localStorage.setItem("optionMenu", optionMenu);
  }, [optionMenu]);

  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const prevOptions = () => {
    setOptionMenu(optionMenu - 1);
  };
  const nextOptions = () => {
    setOptionMenu(optionMenu + 1);
  };
  const opsi1 = () => (
    <>
      <div className="bg-transparent md:bg-slate-500">
        <div
          className={`container mx-auto flex max-w-[1200px] items-center justify-between px-10 py-4 ${activeMenu ? "" : "shadow-md md:shadow-none"}`}
        >
          <h1 className="text-4xl font-bold">Logo.</h1>
          <ul
            className={`px-4 md:flex md:px-0 ${activeMenu ? "fixed left-0 top-0 z-[-9] flex h-screen w-[50%] flex-col bg-red-500 pt-[100px] duration-1000 ease-in-out" : "hidden"}`}
          >
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/about">About</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div
            className={`flex md:hidden ${activeMenu ? "rounded-full bg-slate-400 p-2" : ""}`}
            onClick={handleMenu}
          >
            {activeMenu ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </div>
      </div>
    </>
  );
  const opsi2 = () => (
    <>
      <div className="bg-transparent md:bg-slate-500">
        <div
          className={`container mx-auto flex max-w-[1200px] items-center justify-between px-10 py-4 ${activeMenu ? "" : "shadow-md md:shadow-none"}`}
        >
          <h1 className="text-4xl font-bold">Logo2.</h1>
          <ul
            className={`px-4 md:flex md:px-0 ${activeMenu ? "fixed left-0 top-0 z-[-9] flex h-screen w-[50%] flex-col bg-red-500 pt-[100px] duration-1000 ease-in-out" : "hidden"}`}
          >
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/about">About</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-md pr-2 pt-2 hover:font-bold hover:text-slate-100">
              <button className="flex rounded-md bg-red-400 px-4 py-1 text-sm text-white md:hidden">
                Learn more
              </button>
            </li>
          </ul>
          <button className="hidden rounded-md bg-red-400 px-6 py-2 text-white md:flex">
            Learn more
          </button>
          <div
            className={`flex md:hidden ${activeMenu ? "rounded-full bg-slate-400 p-2" : ""}`}
            onClick={handleMenu}
          >
            {activeMenu ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </div>
      </div>
    </>
  );
  const opsi3 = () => (
    <>
      <div className="h-auto bg-blue-600 py-2">
        <div className="container mx-auto flex max-w-[1200px] items-center justify-between px-10">
          <div className="flex flex-row items-center py-0">
            <FaFacebookF className="pr-2 text-white" size={18} />
            <FaTwitter className="pr-2 text-white" size={24} />
            <FaInstagram className="pr-2 text-white" size={24} />
          </div>

          <div className="py-0">
            <p className="flex items-center">
              <MdOutlineEmail className="pr-2 text-white" size={24} />
              <span className="text-sm text-white"> email us</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-transparent md:bg-slate-500">
        <div
          className={`container mx-auto flex max-w-[1200px] items-center justify-between px-10 py-4 ${activeMenu ? "" : "shadow-md md:shadow-none"}`}
        >
          <h1 className="text-4xl font-bold">Logo3.</h1>
          <ul
            className={`px-4 md:flex md:px-0 ${activeMenu ? "fixed left-0 top-0 z-[-9] flex h-screen w-[50%] flex-col bg-red-500 pt-[100px] duration-1000 ease-in-out" : "hidden"}`}
          >
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/">Home</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/about">About</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-md border-b border-b-gray-100 pr-2 hover:font-bold hover:text-slate-100 md:border-0">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-md pr-2 pt-2 hover:font-bold hover:text-slate-100">
              <button className="flex rounded-md bg-red-400 px-4 py-1 text-sm text-white md:hidden">
                Learn more
              </button>
            </li>
          </ul>
          <button className="hidden rounded-md bg-red-400 px-6 py-2 text-white md:flex">
            Learn more
          </button>
          <div
            className={`flex md:hidden ${activeMenu ? "rounded-full bg-slate-400 p-2" : ""}`}
            onClick={handleMenu}
          >
            {activeMenu ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
        </div>
      </div>
    </>
  );
  const opsi4 = () => <div>isi opsi 4</div>;
  const opsi5 = () => <div>isi opsi 5</div>;

  const renderOptionMenu = () => {
    if (optionMenu === 1) {
      return opsi1();
    } else if (optionMenu === 2) {
      return opsi2();
    } else if (optionMenu === 3) {
      return opsi3();
    } else if (optionMenu === 4) {
      return opsi4();
    } else if (optionMenu === 5) {
      return opsi5();
    } else {
      return <div>Opsi tidak valid</div>;
    }
  };

  return (
    <>
      {renderOptionMenu()}
      <div class="fixed bottom-0 left-1/2 mx-auto mb-4 flex -translate-x-1/2 transform flex-col items-center text-center">
        <h2 className="mb-2 text-2xl font-bold uppercase">opsi {optionMenu}</h2>
        <div>
          <button
            onClick={prevOptions}
            className="border border-r-2 bg-orange-400 px-4 py-2"
          >
            Prev
          </button>
          <button
            onClick={nextOptions}
            className="border border-l-2 bg-orange-400 px-4 py-2"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
