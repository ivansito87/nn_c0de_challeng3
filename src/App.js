import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TweetList from './components/TweetList';
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Container>
              <NavigationBar />
              <Route exact path="/" component={Home} />
            <Route exact path="/live-stream" component={TweetList} />
            <Footer />
            </Container>
          </Switch>
      </Router>
    );
  }
}

export default App;