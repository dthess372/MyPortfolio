import React, { useState, useEffect } from 'react';
import './TopBar.css'
import resumePDF from '../public/DavidHess_Resume.pdf'

function TopBar() {

  const [visible, setVisible] = useState(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 10) { 
      setVisible(true);
    } else if (scrollTop <= 10) {
      setVisible(false);
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // const offset = (window.innerHeight / 2) - 100;
      const targetPosition = element.offsetTop - 100;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className={`topbar ${visible ? 'visible' : 'hidden'}`}>
    {/* <div className='topbar'> */}
      <div className='initials' href='./' onClick={() => scrollToSection('intro')}>DTH</div>      
      <div class="spinner" href='./' onClick={() => scrollToSection('intro')}>
        <div/><div/><div/><div/><div/><div/>
      </div>

      <div className='flexbox'>
      <div className='topbar_link' onClick={() => scrollToSection('experience')}><span className='topbar_link_num'>01. </span>Experience</div>
      <div className='topbar_link' onClick={() => scrollToSection('projects')}><span className='topbar_link_num'>02. </span>Projects</div>
      <div className='topbar_link' onClick={() => scrollToSection('contact')}><span className='topbar_link_num'>03. </span>Contact</div>
      <div className='topbar_resume'>
        <a href={resumePDF} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
      <div className='topbar_linkedin'>
        <a href='https://www.linkedin.com/in/david-hess23/' target="_blank" rel="noreferrer">
          <img className='linkedin' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' alt='LinkedIn'></img>
        </a>
      </div>
    </div></div>
  );
}

export default TopBar;
