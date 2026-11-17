import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

import dineFlow from "../assets/projects/DineFlow.png";
import electronicsSociety from "../assets/projects/ElectronicsSociety.png";
import SmartStreetLight from "../assets/projects/SmartStreetLight.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DineFlow: AI Data Platform",
      img_src: dineFlow,
      repo_link: "https://github.com/AnupeshVerma/DineFlow-AI-Data-Platform",
      description:
        "End-to-end batch pipeline over 10M orders: S3 to Snowflake with a dbt medallion model, a daily Airflow DAG, and an OpenAI layer for review enrichment, RAG chat, and text-to-SQL.",
      techStack: "Snowflake, dbt, Airflow, AWS S3, Docker, OpenAI API, Streamlit",
    },
    {
      id: 2,
      title: "Electronics Society Website",
      img_src: electronicsSociety,
      repo_link: "https://github.com/Electronics-Society-MNNIT/ECE-Society",
      description:
        "Web platform for the Electronics Society at MNNIT Allahabad, connecting ECE students, professors, and alumni. Built as Web Team Coordinator with a team of 7.",
      techStack: "Django, Tailwind CSS, JavaScript",
    },
    {
      id: 3,
      title: "Smart Street Light",
      img_src: SmartStreetLight,
      repo_link: "https://github.com/anupeshverma/Smart_Street_Light",
      description:
        "Street lights that switch on only when movement is detected, using YOLO object detection and frame differencing to track vehicles and estimate their speed.",
      techStack: "Python, NumPy, OpenCV, YOLO",
    },
  ];
  const { ref, mainControls } = useAnimationInView();
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0"
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.25, ease: "easeIn" }}
        >
          {projects.map(({ id, title, img_src, live_link, repo_link, description, techStack }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg pb-5 flex flex-col overflow-hidden"
            >
              <a href={live_link || repo_link} target="_blank" rel="noopener noreferrer">
                <img
                  src={img_src}
                  alt={title}
                  className="w-full aspect-video object-cover duration-200 hover:scale-105"
                />
              </a>
              <div className="w-full flex flex-col flex-1 px-4 pt-4 text-center">
                <p className="text-lg font-bold">{title}</p>
                <p className="text-sm text-gray-400 mt-2 flex-1">{description}</p>
                <div className="mt-4 text-sm font-bold">Tech Stack:</div>
                <div className="text-sm">{techStack}</div>
                <a
                  href={repo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center px-6 py-2 mt-4 duration-200 hover:scale-105 rounded-md shadow-md shadow-blue-600"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
