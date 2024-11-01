import './App.css';
import TopBar from './components/TopBar';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* <div className='bgOverlay'/> */}
      {/* <div className='bgOverlay2'/> */}
      {/* <div className='bgGrid'/> */}
      <TopBar/>
      <header className="App-header">
        <Intro/>
        <Experience/>
        <Projects/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
