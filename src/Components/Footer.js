import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2024</h4>
      <div className='footerLinks'>
        <a href="https://github.com/siddiqui0013" target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href="https://linkedin.com/in/asif-tahir-198044275" target='_blank' rel='noreferrer'><FaLinkedin/></a>
        <a href='mailTo:asifm8702@gmail.com' target='_blank' rel='noreferrer'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer