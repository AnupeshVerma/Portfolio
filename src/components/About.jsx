import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
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
            transition={{ duration: 0.5 }}
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
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          My journey started with the hum of circuits and blossomed into the
          clickety-clack of code. I'm <strong>Anupesh Kumar Verma</strong>, an
          <strong> Electronics and Communication Engineer</strong> with a
          passion for building not just tech, but also communities. As the{" "}
          <strong>Web Team Coordinator</strong> at the{" "}
          <strong>Electronics Society</strong>, I craft online experiences that
          bridge the gap between students and technology. And through my
          experience as a <strong>GDSC Facilitator</strong>, I discovered the
          joy of empowering others to unleash their tech potential. Now, I'm on
          a mission to weave code that connects, inspires, and simplifies lives
          - one line at a time..
          <motion.div
            className="bg-cyan-500 absolute top-1 bottom-1 left-0 right-0 z-2"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
          ></motion.div>
        </motion.p>

        <br />

        <motion.p
          className="text-xl leading-8 text-justify"
          variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          I'm an aspiring software developer, a weaver of digital tapestries
          that solve problems, connect us, and push the boundaries of what's
          possible. Every line I write is a step towards a future where
          technology amplifies our potential, not replaces it. My pixels paint a
          future where technology transcends the binary, where circuits sing
          symphonies of progress, and the human touch guides the digital brush.
          <motion.div
            className="bg-cyan-500 absolute top-1 bottom-1 left-0 right-0 z-2"
            variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
          ></motion.div>
        </motion.p>
      </div>
    </div>
  );
};

export default About;
