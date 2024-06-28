"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [optionMenu, setOptionMenu] = useState(1);
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
          className={`container mx-auto flex items-center justify-between px-10 py-4 ${activeMenu ? "" : "shadow-md"}`}
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
  const opsi2 = () => <div>isi opsi 2</div>;
  const opsi3 = () => <div>isi opsi 3</div>;
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
