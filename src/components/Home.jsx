import React, { useEffect } from "react";
import heroImage from "../assets/heroImage.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { RESUME_URL, EMAIL, LINKEDIN_URL, GITHUB_URL } from "../constants";

const Home = () => {
  useEffect(() => {
    document.title = "Anupesh Verma | Data Engineer";
  }, []);

  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={35} />,
      href: LINKEDIN_URL,
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={35} />,
      href: GITHUB_URL,
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={35} />,
      href: `mailto:${EMAIL}`,
    },
  ];

  return (
    <div
      name="home"
      className="min-h-screen md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-evenly h-full pt-24 pb-24 md:pt-10 md:pb-0 px-4 gap-10">
        <motion.div
          id="sideText"
          className="md:w-1/2 flex flex-col justify-center md:h-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-4xl sm:text-6xl font-bold text-white">
            Hey, I'm Anupesh
            <br />
          </h3>
          <div className="text-white my-2 text-2xl md:text-3xl">
            I'm a
            <span className="text-cyan-500">
              <Typewriter
                words={[" Data Engineer"]}
                loop={10}
                cursor
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
          </div>
          <p className="text-gray-400 py-2 max-w-md">
            I build production data pipelines that turn raw healthcare files
            into trusted data for{" "}
            <span className="text-white font-semibold">60M+ users</span>, using
            PySpark, Airflow, AWS, and Snowflake, and I build GenAI features on
            top of the data layer.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:scale-105 duration-300"
            >
              View Resume
            </a>
            <Link
              to="projects"
              smooth
              duration={500}
              className="cursor-pointer px-6 py-3 rounded-md border border-cyan-500 text-cyan-400 font-semibold hover:scale-105 duration-300"
            >
              See Projects
            </Link>
          </div>

          <motion.div
            id="connectLinks"
            className="md:hidden mt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <ul className="list-none flex">
              {links.map(({ id, icon, href }) => (
                <li
                  key={id}
                  className={"mx-2 p-2 rounded-full duration-300 bg-gray-900 "}
                >
                  <a
                    href={href}
                    className="flex justify-between items-center w-full text-white hover:bg-cyan-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <div id="heroImage" className="md:w-1/2">
          <motion.img
            src={heroImage}
            alt="Anupesh Kumar Verma"
            className="rounded-2xl mx-auto w-3/4"
            initial={{ opacity: 0, x: "25vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
