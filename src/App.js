import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/home'
import About from './components/About/about'
import Footer from './components/Footer/footer'
import Navbar from './components/Navbar/navbar'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
