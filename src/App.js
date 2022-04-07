//import { BrowserRouter, Routes, Route } from "react-router-dom";
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
{/*       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route path="/about" component={About} />
          <Route path="/work-experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
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
