import React from 'react';
import './Intro.css'
import './General.css'

function Intro() {
  return <>
  <div className='container'>
    <div className='HelloWorld'>Hello world, my name is</div>
    <div className='DavidHess'>David Hess.</div>
    <div className='IntroBlurb'>
    I'm a software engineer passionate about crafting captivating digital experiences.
    Specializing in immersive visualizations and innovative web applications,
    I push technological boundaries to bring ideas to life.
    Currently, I'm deeply involved in Virtual Reality,
    developing cutting-edge vehicle simulation solutions that revolutionize interaction with virtual environments.
    </div>
  </div>
  </>
}

export default Intro;
