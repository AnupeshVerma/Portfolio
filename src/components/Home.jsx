import React, { useEffect } from "react";
import heroImage from "../assets/heroImage.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Typewriter, Cursor } from "react-simple-typewriter";

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
        <div
          id="sideText"
          className="md:w-1/2 flex flex-col justify-center md:h-full"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a
            <br />
            <span className="text-cyan-500">
              {" "}
              <Typewriter
                words={["Full Stack Developer", "Software Developer"]}
                loop={10}
                cursor
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello! My name is Anupesh and I am a full stack developer with
            experience in building websites.
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
        </div>
        <div id="heroImage" className="md:w-1/2">
          <img
            src={heroImage}
            alt="myProfile"
            className="rounded-2xl mx-auto md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
