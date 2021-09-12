import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/home'
import About from './components/About/about'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar'
import Experience from './components/Experience/experience'
import Skills from './components/Skills/skills'
import Project from './components/Project/project'
import Contact from './components/Contact/contact'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router basename="/react-portfolio">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="about" component={About} />
          <Route path="/work-experience" component={Experience} />
          <Route path="/skills" component={Skills} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
