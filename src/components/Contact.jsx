import React from 'react';
import './Contact.css'
import './General.css'
import githubIcon from "../public/images/icons8-github-48.png"
import linkedInIcon from "../public/images/icons8-linkedin-50.png"

function Contact() {
  return <>
  <div id='contact' className='container'>
    <div className='title'><span className='title_num'>04. </span>Get In Touch</div>
      <div className=''>My inbox is always open 
      {/* <img className='linkedInIcon' src={linkedInIcon} alt="githubIcon"/> */}
      {/* <img className='githubIcon' src={githubIcon} alt="githubIcon"/> */}
      </div>
  </div>
  </>
}

export default Contact;
