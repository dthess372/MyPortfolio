import React from 'react';
import './TopBar.css'
import resumePDF from '../public/DavidHess_Resume.pdf'
// import MyLogo from '../public/images/mylogo_nobox.png'

function TopBar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerHeight / 2;
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className='topbar'>
      <div className='initials' href='./'>DTH</div>
      {/* <img className='MyLogo' src={MyLogo} href='./'></img> */}
      
      <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>

      <div className='flexbox'>
      <div className='topbar_link' onClick={() => scrollToSection('about')}><span className='topbar_link_num'>01. </span>About</div>
      <div className='topbar_link' onClick={() => scrollToSection('experience')}><span className='topbar_link_num'>02. </span>Experience</div>
      <div className='topbar_link' onClick={() => scrollToSection('projects')}><span className='topbar_link_num'>03. </span>Projects</div>
      <div className='topbar_link' onClick={() => scrollToSection('contact')}><span className='topbar_link_num'>04. </span>Contact</div>
      <div className='topbar_resume'><a href={resumePDF} target="_blank" rel="noreferrer">Resume</a></div>
    </div></div>
  );
}

export default TopBar;
