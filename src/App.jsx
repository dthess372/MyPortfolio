import './App.css';
import TopBar from './components/TopBar';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import SideBars from './components/SideBars';

function App() {
  return (
    <div className="App">
      <div className='bgGrid'/> {/* -100 */}
      <div className='bgOverlay'/>
      <TopBar/> {/* 100 */}
      <SideBars/>
      <header className="App-header">
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
