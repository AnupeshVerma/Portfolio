import React from "react";
import { motion } from "framer-motion";
import useAnimationInView from "../customHooks/useAnimationInView";

const About = () => {
  const { ref, mainControls, slideControls } = useAnimationInView();

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-4 pt-16"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <motion.p
            className="text-4xl font-bold inline border-b-4 border-gray-500"
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1 }}
          >
            About
          </motion.p>
        </div>

        <motion.p
          className=" relative text-xl mt-12 leading-8 text-justify"
          ref={ref}
          variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        >
          I'm Anupesh Kumar Verma, a <strong>Data Engineer</strong> at{" "}
          <strong>Personify Health</strong>. I work on the pipelines and data
          quality checks that turn raw healthcare files into trusted data for{" "}
          <strong>60M+ users</strong>, using PySpark, Airflow, AWS, and
          Snowflake.
          <motion.span
            className="bg-gradient-to-br from bg-gray-600 to-gray-900 absolute top-1 bottom-1 left-0 right-0 z-2 rounded-sm"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
          ></motion.span>
        </motion.p>

        <br />

        <motion.p
          className="relative text-xl leading-8 text-justify"
          variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
        >
          Day to day, I build and maintain Airflow DAGs for an event-driven
          ingestion platform, automate file monitoring, and onboard new
          healthcare clients. I also build <strong>GenAI</strong> features on
          top of the data layer, from RAG pipelines to multi-agent assistants on
          Amazon Bedrock. Before Personify Health, I was a{" "}
          <strong>Python Developer Intern</strong> at Infobay.ai (formerly
          EduGorilla), and I hold a B.Tech in Electronics and Communication
          Engineering from <strong>NIT Allahabad</strong>.
          <motion.span
            className="bg-gradient-to-br from bg-gray-600 to-gray-900 absolute top-1 bottom-1 left-0 right-0 z-2 rounded-sm"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.25, delay: 0.5, ease: "easeIn" }}
          ></motion.span>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
