
import React, { Component } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Directory from "./Directory";
import { BrowserRouter } from "react-router-dom";
import Blog from "./Blog/Blog";
import Login from "./login/Login";
import Signin from './login/Login'
import Register from "./login/Register"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,

    }
  }
  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    }
    else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
  }


  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : 'register';
    return (
      <BrowserRouter>
        <div className="App">
          <div className="login">
            <div className="container">
              {isLogginActive && <Login containerRef={(ref) => this.current = ref} />}
              {!isLogginActive && <Register containerRef={(ref) => this.current = ref} />}
            </div>
            <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)} />
          </div>
          <Header />
          {/* <Login/> */}

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


const RightSide = (props) => {
  return <div className='right-side' ref={props.containerRef} onClick={props.onClick}>
    <div className='inner-container'>
      <div className='text'>{props.current}</div>
    </div>
  </div>
}

export default App;
