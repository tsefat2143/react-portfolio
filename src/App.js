import React, { Suspense, lazy } from 'react';
import ReactGA from 'react-ga4'
import './App.css';

ReactGA.initialize("G-DKTXJ3QKS6")
ReactGA.send("pageview");

// Lazy-load components
const Navbar = lazy(() => import('./components/Navbar/navbar'));
const Home = lazy(() => import('./components/Home/home'));
const About = lazy(() => import('./components/About/about'));
const Skills = lazy(() => import('./components/Skills/skills'));
const Experience = lazy(() => import('./components/Experience/experience'));
const Project = lazy(() => import('./components/Project/project'));
// const Contact = lazy(() => import('./components/Contact/contact'));

function App() {
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="spinner-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
          </div>
        }
      >
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Project />
        {/* <Contact /> */}
      </Suspense>
    </div>
  );
}

export default App;
