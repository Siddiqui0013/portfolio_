import React from 'react';
import ProjectBox from './ProjectBox';
import p1 from '../images/p1.jpg'
import p4 from '../images/p4.jpg'
import p5 from '../images/p5.jpg'
import p7 from '../images/p3.jpg'
import p2 from '../images/p2.jpg'



const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={p1} projectName="SellioAMZ" />
        <ProjectBox projectPhoto={p2} projectName="SellioAMZ_Extension" />
        <ProjectBox projectPhoto={p7} projectName="MindCanvasAI" />
        <ProjectBox projectPhoto={p4} projectName="CRM" />
        <ProjectBox projectPhoto={p5} projectName="CeaserCipher" />
      </div>

    </div>
  )
}

export default Projects