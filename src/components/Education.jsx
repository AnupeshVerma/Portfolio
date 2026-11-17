import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useAnimationInView from "../customHooks/useAnimationInView";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";

function Education() {
  const { ref, mainControls } = useAnimationInView();

  const educationData = [
    {
      id: 1,
      title: "Motilal Nehru National Institute of Technology Allahabad",
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Electronics and Communication Engineering",
      duration: "2020 - 2024",
      description: "CGPA: 7.9/10",
    },
    {
      id: 2,
      title: "Sri Sai Inter College",
      degree: "Intermediate (Class XII)",
      duration: "2020",
      description: "Honored for the best JEE rank in the city",
    },
  ];

  return (
    <div
      name="education"
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
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            Education
          </motion.p>
          <p className="py-6"> </p>
        </div>
        <div className="py-10" ref={ref}>
          <VerticalTimeline>
            {educationData.map((education) => (
              <VerticalTimelineElement
                key={education.id}
                className="education-element"
                contentStyle={{ background: "transparent", color: "white" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date={education.duration}
                iconStyle={{ background: "#138781" }}
                icon={<SchoolIcon />}
              >
                <h1 className="education-title font-semibold text-xl">{education.title}</h1>
                <h4 className="education-degree text-gray-400">{education.degree}</h4>
                {education.branch && (
                  <h4 className="education-branch text-gray-400">{education.branch}</h4>
                )}
                <h4 className="education-description text-gray-400">{education.description}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Education;
