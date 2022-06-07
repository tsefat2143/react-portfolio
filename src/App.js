import Home from './components/Home/home'
import About from './components/About/about'
import Navbar from './components/Navbar/navbar'
import Experience from './components/Experience/experience'
import Skills from './components/Skills/skills'
import Project from './components/Project/project'
import Contact from './components/Contact/contact'
import ReactGA from 'react-ga4'
import './App.css';

ReactGA.initialize(`"${process.env.REACT_APP_ANALYTICS}"`)

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
