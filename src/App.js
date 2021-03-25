
import React, { Component } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Directory from "./Directory";
import { BrowserRouter } from "react-router-dom";
import Blog from "./Blog/Blog";
import Login from "./login/Login";
import Signin from './login/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
        <Login/>

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
