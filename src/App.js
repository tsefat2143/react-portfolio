import Home from './components/Home/home'
import About from './components/About/about'
import Navbar from './components/Navbar/navbar'
import Experience from './components/Experience/experience'
import Skills from './components/Skills/skills'
import Project from './components/Project/project'
import Contact from './components/Contact/contact'
import './App.css';

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
