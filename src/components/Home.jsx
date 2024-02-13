import React, { useState } from "react";
import logo from "../assets/logo.png";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-slate-200 sticky top-0 z-[20] mx-auto flex w-full items-center justify-around">
        <div>
          <img src={logo} className="h-16 w-16 " alt="" />
        </div>
        <div>
          <h1>XYZ SYSTEMS LLP.</h1>
        </div>
        <div className="text-transparent">
          <h1>X</h1>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            ☰
          </button>
        </div>
      </header>
      <nav
        className={`lg:flex lg:items-center lg:justify-around text-black text-center ${
          menuOpen ? "block" : "hidden"
        } lg:block py-2`}
      >
        <ul className="lg:flex space-x-4 font-semibold text-xs">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Dash Board
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Transactions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Journal
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`lg:hidden ${
          menuOpen ? "block" : "hidden"
        } absolute top-16 right-0 bg-slate-200 p-20 w-screen h-screen border border-gray-300`}
      >
        <ul className="space-y-8">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Dash Board
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Transactions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Journal
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;