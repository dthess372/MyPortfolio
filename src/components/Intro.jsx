import React from 'react';
import './Intro.css'
import './General.css'

function Intro() {

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

  return <>
  <div id='intro' className='IntroContainer'>
    <div className='DavidHess'>David Hess</div>
    <div className='Subtitle'>
    Software Engineer & Web Designer
    </div>
    <div className='IntroLinks'>
      <div className='IntroLink' onClick={() => scrollToSection('experience')}>Experience</div>
      <div className='IntroLink' onClick={() => scrollToSection('projects')}>Projects</div>
      <div className='IntroLink' onClick={() => scrollToSection('contact')}>Contact</div>
    </div>
    <div className='IntroBlurb'>
      A Detroiter revolutionizing interaction with virtual environments and redefining how we consume data using web devlopment and mixed reality 
    </div>
  </div>
  </>
}

export default Intro;
