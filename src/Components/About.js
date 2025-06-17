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
          <h1 className='AboutTextHeading' >About myself </h1>
          {/* <p>
          A frest graduate in <b>Information Technology</b>, with expertise in Web development using <b>React Js.</b> With years of experience in developing web apps.I have also worked with CSS libraries like <b>Tailwind</b> and <b>Bootstrap. </b>
I also have experience in integerating backend using Php and Google Firebase.
Other then this, been doing projects for different platforms in different languages.
          </p> */}

{/* <p> I hold a Bachelor's of Science in <b>Information Technology</b> and am a skilled software engineer with expertise in web development using <b>React</b> and <b>Next.js</b>. With years of experience building web applications, I am proficient in CSS libraries like <b>Tailwind</b> and <b>Bootstrap</b>, and have experience integrating backends using <b>PHP</b> and <b>Google Firebase</b>. I enjoy working with a wide range of technologies and programming languages, constantly exploring new platforms and solving complex challenges. </p> */} <b>Full-Stack Developer</b> | <b>React Native Engineer</b>  | <b>Node.js Specialist</b>
<br/>
<br/>

With 2+ years of hands-on experience in <b>Software Development</b> and a <b>Bachelor's in IT</b>, I build fast, scalable web and mobile apps using modern tech stacks.
<br/>
💻 <b>Backend Mastery </b> – Expert in Node.js/Express, with experience in PHP, .NET, Django – I adapt to any server-side challenge.
<br/>
📱 <b>Mobile Dev</b> – Skilled in React Native for cross-platform iOS/Android apps.
<br/>
⚡ <b>Frontend Pro</b> – Crafting dynamic UIs with React, Next.js, Tailwind, Bootstrap.
<br/>
I am Stack-Agnostic – I’ll ramp up fast.

Problem-Solver – From APIs to pixel-perfect UIs, I deliver.

Passionate Learner – Always exploring cutting-edge tools.

Let’s turn ideas into high-performance apps!
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
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Typescript' />
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='C#'/>
        <Skills skill='Python' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Tailwind'/>
        <Skills skill='C++' />
        <Skills skill='Java'/>
        <Skills skill='Github' />
        
      </div>
    </>
  )
}

export default About