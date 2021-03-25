
import React, { Component } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Directory from "./Directory";
import { BrowserRouter } from "react-router-dom";
import Blog from "./Blog/Blog";

import Signin from './signin/signin'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <Form /> */}

          <Blog />
          {/* <Switch>
    <Route exact path="/" component={Home}/>
    <Route Path="/Directory"component={Directory}/>
  </Switch> */}
          <h1>welcome to our browser</h1>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
