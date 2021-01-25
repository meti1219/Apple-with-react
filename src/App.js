import React, {Component} from 'react'
// import logo from './logo.svg';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import './App.css';

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";


class App extends Component{
  render() {
    return (
      <div>
        <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/mac" exact component={Mac} />
            <Route path="/iphone" exact component={Iphone} />
            <Route path="/iphone/:pid" exact component={Productpage} />
            <Route path="/" component={Four04} />
          </Switch>
          <Footer />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
