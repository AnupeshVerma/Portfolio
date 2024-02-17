import React, { useEffect } from "react";
import heroImage from "../assets/heroImage.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.title = "Anupesh's Portfolio";
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-evenly h-full pt-20 p-4 ">
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
                words={[" Full Stack Developer", " Software Developer"]}
                loop={10}
                cursor
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            From algorithms to dazzling web experiences: Anupesh here, a
            software developer passionate about bringing innovative ideas to
            life, turning your vision into reality.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <FaCircleArrowRight size={20} />
              </span>
            </Link>
          </div>
        </motion.div>
        <div id="heroImage" className="md:w-1/2">
          <motion.img
            src={heroImage}
            alt="myProfile"
            className="rounded-2xl mx-auto md:w-3/4"
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
