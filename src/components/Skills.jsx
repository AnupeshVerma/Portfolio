import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

import { FaJava, FaProjectDiagram } from "react-icons/fa";
import {
  SiApachekafka,
  SiMysql,
  SiDocker,
  SiLinux,
  SiJira,
  //SiLangchain,
} from "react-icons/si";
import { TbBrandAws, TbBrandOpenai, TbVectorTriangle } from "react-icons/tb";

import python_img from "../assets/Skills/python.png";
import sql_img from "../assets/Skills/sql.png";
import spark from "../assets/Skills/spark.png";
import airflow from "../assets/Skills/airflow.png";
import pandas from "../assets/Skills/pandas.png";
import aws from "../assets/Skills/aws.png";
import snowflake from "../assets/Skills/snowflake.png";
import postgresql_img from "../assets/Skills/postgresql.png";
import git_img from "../assets/Skills/git.png";
import github_img from "../assets/Skills/github.png";

const Skills = () => {
  // Each skill shows an image (img_src), a react-icon (Icon + color), or a text badge.
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { skill_id: 1, img_src: python_img, skill_title: "Python", style: "shadow-sky-800" },
        { skill_id: 2, img_src: sql_img, skill_title: "SQL", style: "shadow-blue-600" },
        { skill_id: 3, Icon: FaJava, color: "#f89820", skill_title: "Java", style: "shadow-orange-500" },
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        { skill_id: 1, img_src: spark, skill_title: "PySpark", style: "shadow-orange-600" },
        { skill_id: 2, img_src: airflow, skill_title: "Apache Airflow", style: "shadow-gray-400" },
        { skill_id: 3, badge: "dbt", color: "#FF694A", skill_title: "dbt", style: "shadow-orange-500" },
        { skill_id: 4, Icon: SiApachekafka, color: "#ffffff", skill_title: "Apache Kafka", style: "shadow-gray-400" },
        { skill_id: 5, img_src: pandas, skill_title: "Pandas", style: "shadow-indigo-900" },
      ],
    },
    {
      title: "Cloud & Databases",
      skills: [
        { skill_id: 1, img_src: aws, skill_title: "AWS (S3, Lambda, Glue, Step Functions)", style: "shadow-gray-700" },
        { skill_id: 2, img_src: snowflake, skill_title: "Snowflake", style: "shadow-sky-600" },
        { skill_id: 3, img_src: postgresql_img, skill_title: "PostgreSQL", style: "shadow-sky-700" },
        { skill_id: 4, Icon: SiMysql, color: "#5c9fd6", skill_title: "MySQL", style: "shadow-blue-500" },
      ],
    },
    {
      title: "GenAI",
      skills: [
        //{ skill_id: 1, Icon: SiLangchain, color: "#ffffff", skill_title: "LangChain", style: "shadow-gray-400" },
        { skill_id: 2, Icon: FaProjectDiagram, color: "#22d3ee", skill_title: "LangGraph", style: "shadow-cyan-500" },
        { skill_id: 3, Icon: TbBrandAws, color: "#FF9900", skill_title: "Amazon Bedrock", style: "shadow-orange-500" },
        { skill_id: 4, Icon: TbVectorTriangle, color: "#60a5fa", skill_title: "FAISS", style: "shadow-blue-500" },
        { skill_id: 5, Icon: TbBrandOpenai, color: "#ffffff", skill_title: "OpenAI API", style: "shadow-gray-400" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { skill_id: 1, img_src: git_img, skill_title: "Git", style: "shadow-orange-600" },
        { skill_id: 2, img_src: github_img, skill_title: "GitHub", style: "shadow-gray-400" },
        { skill_id: 3, Icon: SiDocker, color: "#2496ED", skill_title: "Docker", style: "shadow-sky-500" },
        { skill_id: 4, Icon: SiLinux, color: "#FCC624", skill_title: "Linux", style: "shadow-yellow-500" },
        { skill_id: 5, Icon: SiJira, color: "#2684FF", skill_title: "Jira", style: "shadow-blue-600" },
      ],
    },
  ];

  const { ref, mainControls } = useAnimationInView();

  const renderLogo = ({ img_src, Icon, badge, color, skill_title }) => {
    if (img_src) {
      return <img src={img_src} alt={skill_title} className="w-20 h-20 object-contain mx-auto" />;
    }
    if (Icon) {
      return (
        <span className="flex w-20 h-20 mx-auto items-center justify-center">
          <Icon size={64} color={color} title={skill_title} />
        </span>
      );
    }
    return (
      <span
        className="flex w-20 h-20 mx-auto items-center justify-center text-4xl font-extrabold"
        style={{ color }}
      >
        {badge}
      </span>
    );
  };

  const renderTechs = (techArray) => {
    return techArray.map((skill) => (
      <motion.div
        key={skill.skill_id}
        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}
        variants={
          skill.skill_id % 3 === 1
            ? {
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }
            : skill.skill_id % 3 === 2
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
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {renderLogo(skill)}
        <p className="mt-4 px-2 text-sm">{skill.skill_title}</p>
      </motion.div>
    ));
  };

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white" ref={ref}>
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">Technologies I work with</p>
        </div>

        {skillGroups.map((group) => (
          <div className="my-6" key={group.title}>
            <p className="text-2xl font-semibold">{group.title}</p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center py-6 px-8 sm:px-0">
              {renderTechs(group.skills)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
