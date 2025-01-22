import React from 'react';
import { CiLink } from "react-icons/ci";

const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {

    SellioAMZDesc : "Created using React and Firebase. It is a Amazon Seller tool for analyzing products.",
    SellioAMZGithub : "https://amazon-seller-tool.vercel.app/",

    SellioAMZ_ExtensionDesc : "A Chrome Extension for Amazon Sellers to analyze products.",
    SellioAMZ_ExtensionGithub : "https://github.com/siddiqui0013/",

    MindCanvasAIDesc : "This website is created in MERN stack. It is a AI document and slides generator.",
    MindCanvasAIGithub : "https://mindcanvas-ai.vercel.app/",

    CRMDesc : "This website is created in MERN stack. It is a Customer Relationship Management system.",
    CRMGithub : "https://ewl-crm.vercel.app/",

    SafeDrive_AlertDesc : "An Android App for safe driving built in Kotlin. It uses ML to detect drowsiness and sends alert to drivers.",
    SafeDrive_AlertGithub : "https://github.com/Siddiqui0013/SafeDrive-Alert",

    CeaserCipherDesc : "This website is created with HTML, CSS, Javascript, to enctypt/decrypt Ceaser Cipher text.",
    CeaserCipherGithub : "https://siddiqui0013.github.io/ceaser/",

  }

  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a href={desc[projectName + 'Github']} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><CiLink/> Link</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox