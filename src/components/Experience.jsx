import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useAnimationInView from "../customHooks/useAnimationInView";
import { ReactComponent as WorkIcon } from "../assets/work.svg";

function Experience() {
  const { ref, mainControls } = useAnimationInView();

  const experienceData = [
    {
      id: 1,
      title: "Data Engineer I",
      company: "Personify Health (Cloudangles)",
      location: "Noida, Uttar Pradesh",
      duration: "Nov 2025 - Present",
      points: [
        "Contributed to migrating a legacy SSIS and SQL Server workflow to a distributed PySpark pipeline processing healthcare datasets for 60M+ users, enabling scalable batch processing.",
        "Built and maintained 20+ Airflow DAGs for an event-driven ingestion platform, triggering Docker-based ETL jobs via KubernetesPodOperator, with duplicate-run guards and per-source concurrency limits.",
        "Automated file monitoring with an Airflow DAG that generates hourly exception reports for missing, delayed, and invalid inbound files, cutting monitoring effort by 80%+.",
        "Implemented a serverless pre-ETL layer on AWS Step Functions, Lambda, and Glue that fixes and validates raw files the core ETL cannot ingest as-is.",
        "Developed standardization, validation, Melissa data-quality, and MPI checks in the processing layer, with SQL reconciliation across PostgreSQL, Aurora, and Snowflake.",
      ],
    },
    {
      id: 2,
      title: "Data Engineer Trainee",
      company: "Personify Health (Cloudangles)",
      location: "Noida, Uttar Pradesh",
      duration: "Jan 2025 - Nov 2025",
      points: [
        "Onboarded 10+ healthcare clients by mapping source schemas to internal data models, configuring ingestion pipelines, and validating end-to-end data flow in production.",
        "Engineered a multi-agent wellness assistant on Amazon Bedrock (Claude 3.7 Sonnet) using LangGraph and FAISS: a supervisor agent routes queries to Journey, Challenges, and Shoutouts sub-agents.",
        "Connected agents to a knowledge base of journeys, challenges, and habits to cut redundant API calls, returning structured JSON rendered as interactive UI cards.",
      ],
    },
    {
      id: 3,
      title: "Python Developer Intern",
      company: "Infobay.ai (formerly EduGorilla)",
      location: "Lucknow, Uttar Pradesh",
      duration: "Aug 2024 - Dec 2024",
      points: [
        "Created a BlueStacks-based automated Android testing framework using ADB and Android SDK, reducing manual testing effort by 30% and speeding up test execution by 40%.",
        "Implemented a Progressive Web App (PWA) install flow, speeding up app delivery and customer onboarding.",
        "Automated build generation and Google Play Console deployment with Selenium, reducing manual release effort.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full pt-16"
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
            Experience
          </motion.p>
          <p className="py-6"> </p>
        </div>
        <div className="py-10" ref={ref}>
          <VerticalTimeline>
            {experienceData.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                className="experience-element"
                contentStyle={{ background: "transparent", color: "white" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date={experience.duration}
                iconStyle={{ background: "#138781" }}
                icon={<WorkIcon />}
              >
                <h1 className="experience-title font-semibold text-xl">{experience.title}</h1>
                <h4 className="experience-company font-semibold">{experience.company}</h4>
                <h4 className="experience-location text-gray-400">{experience.location}</h4>
                <ul className="experience-description list-disc pl-5 mt-3 space-y-2 text-left text-sm text-gray-300">
                  {experience.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;
