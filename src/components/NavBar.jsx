import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {

  const links = [
    // Navigate according to the name given during function return
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex  justify-between items-center w-full h-16 text-white bg-black fixed px-4 z-10">
      <div>
        <h1 className="font-signature text-5xl">Anupesh</h1>
      </div>

      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <motion.div id="resumeMobileView" className="md:hidden">
        <button className="px-2 py-1 font-bold shadow-sm shadow-blue-500 rounded-sm">
          <a href="https://drive.google.com/file/d/1WzSwm9ztfZEup4NHN9gtIhfNvNpKLdaw/view?usp=drive_link">
            My Resume
          </a>
        </button>
      </motion.div>
    </div>
  );
};

export default NavBar;
