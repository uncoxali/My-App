import React from 'react';
import './App.css';
import Navbars from './Navbars/Navbars';
import About from './About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './Blog/Blog';
import Resume from './Resume/Resume';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <Router>
      <div className="bag">
        <Navbars />
        <div className="container mt-3">
          <Main />
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
