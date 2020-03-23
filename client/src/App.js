import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Home from './components/Home.js';
import Summoner from './components/Summoner.js';

// Main app styling.
import './App.css';
import './images/backgrounds/background.jpg';

// Main App Class.
export default class App extends Component
{
  // Construct our states.
  constructor(props)
  {
    super(props);

    this.state = {
      apiResponse: false,
    };
  }

  // Call to our node server.
  FetchAPI()
  {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ 
        apiResponse: res
      }))
      .catch(err => err);
  }

  // Render our app here.
  render()
  {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Summoner/:region/:summoner" component={Summoner} />
          </Switch>
        </div>
      </Router>
    );
  }
}