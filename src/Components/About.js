import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>About Me</h1>

          <b>AI Engineer</b> | <b>Full-Stack Developer</b>

          <br/><br/>

          Currently pursuing <b>MS in Artificial Intelligence</b>, transitioning from full-stack development to building intelligent systems.

          <br/><br/>

          I have 3+ years of experience developing scalable web and mobile applications using modern technologies like React, Node.js, and React Native.

          <br/><br/>

          Now focused on <b>Machine Learning, AI systems, and data-driven applications</b>—combining strong engineering fundamentals with intelligent solutions.

          <br/><br/>

          Let’s build smarter, not just bigger 🚀
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Core Skills</h1>
      <div className='skills'>
        <Skills skill='TypeScript' />
        <Skills skill='JavaScript' />
        <Skills skill='Python' />
        <Skills skill='Node.js' />
        <Skills skill='AI / Machine Learning' />
        <Skills skill='React' />
        <Skills skill='MongoDb' />
        <Skills skill='Tailwind' />
        <Skills skill='GitHub' />
      </div>
    </>
  )
}

export default About;