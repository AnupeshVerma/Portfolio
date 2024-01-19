import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-4 pt-16"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
        </p>
      </div>

      <p className="text-xl mt-12 leading-8 text-justify">
      My journey started with the hum of circuits and blossomed into the clickety-clack of code. I'm <strong>Anupesh Kumar Verma</strong>, an 
      <strong> Electronics and Communication Engineer</strong> with a passion for building not just tech, but also communities. As the <strong>Web Team Coordinator</strong> at the <strong>Electronics Society</strong>, I craft online experiences that bridge the gap between students and technology. And through my experience as a <strong>GDSC Facilitator</strong>, I discovered the joy of empowering others to unleash their tech potential. Now, I'm on a mission to weave code that connects, inspires, and simplifies lives - one line at a time.. 

      </p>

      <br />

      <p className="text-xl leading-8 text-justify">
      I'm an aspiring software developer, a weaver of digital tapestries that solve problems, connect us, and push the boundaries of what's possible. Every line I write is a step towards a future where technology amplifies our potential, not replaces it. My pixels paint a future where technology transcends the binary, where circuits sing symphonies of progress, and the human touch guides the digital brush.
      </p>
    </div>
  </div>
  )
}

export default About