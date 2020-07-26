import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TweetList from './components/TweetList';
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      /* <div className="App">        
        <TweetList/>
        /* <Route component={TweetList} /> 
      </div>*/
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/live-stream" component={TweetList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;