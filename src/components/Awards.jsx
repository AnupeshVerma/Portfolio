import React from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

import hackSquadLogo from "../assets/Awards/hacksquad2022.jpg";
import hackSquadGoodies from "../assets/Awards/hacksqaud2022Goodies.jpeg";

import devElevateLogo from "../assets/Awards/DevElevate/DevElevateLogo.jpg";
import devElevateWin from "../assets/Awards/DevElevate/DevElevateWinner.jpg";

function Awards() {
  const { ref, mainControls, slideControls } = useAnimationInView();

  const awardData = [
    {
      id: 1,
      title: "14th Global Rank in Hacksquad 2022",
      description:
        "A team event for contribution in open source projects on GitHub.",
      images: [hackSquadLogo, hackSquadGoodies],
    },
    {
      id: 2,
      title: "DevElevate Platinum Winner",
      description: "A blog writing competion organized by Showwcase",
      images: [devElevateLogo, devElevateWin],
    },
  ];

  return (
    <div
      name="awards"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="heading">
          <motion.p
            className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 1 }}
          >
            Awards
          </motion.p>
          <p className="py-6">A Journey of Success and Achievement</p>
        </div>
        <div className="mainContent flex flex-col items-center" ref={ref}>
          {awardData.map((award) => (
            <motion.div
              key={award.id}
              className={`w-full flex flex-col md:flex-row py-6 gap-y-4 sm:gap-y-12 justify-evenly items-center ${
                award.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              variants={
                award.id % 2 === 0
                  ? {
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }
                  : {
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }
              }
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Carousel images={award.images} />
              <div className="content text-justify">
                <p className="px-3 text-lg md:text-2xl font-semibold">
                  {award.title}
                </p>
                <p className="px-3 text-sm text-gray-400">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Awards;
