import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

import c from "../assets/C.png";
import cpp from "../assets/cpp.png";
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import django from "../assets/django.png";
import opencv from "../assets/opencv.png";
import sql from "../assets/sql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: c,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: python,
      title: "Python",
      style: "shadow-sky-800",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: django,
      title: "Django",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: opencv,
      title: "OpenCV",
      style: "shadow-gray-400",
    },
    {
      id: 11,
      src: sql,
      title: "SQL",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  const { ref, mainControls} = useAnimationInView();

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
          ref={ref}
        >
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              variants={
                id % 3 === 1
                  ? {
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }
                  : id % 3 === 2
                  ? {
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }
                  : {
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }
              }
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay:0.2 }}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
