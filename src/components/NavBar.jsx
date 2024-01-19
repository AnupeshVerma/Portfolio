import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Skills" },
    { id: 5, link: "Contact" },
  ];

  return (
    <div className="flex  justify-between items-center w-full h-20 text-white bg-black fixed px-4 z-10">
      <div>
        <h1 className="font-signature text-5xl">Anupesh</h1>
      </div>

      <ul className="hidden md:flex space-x-8">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link.link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize font-medium text-4xl text-gray-500 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
