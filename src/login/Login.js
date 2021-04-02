import React from 'react';
import "./style.scss";
import axios from 'axios';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={
          username:'',
          email:'',
          password:''

        }

    }

    // handleChange(event){
    //   // this.setState({value:event.target.value});
    //   this.setState(prevState=>({
    //     LoginData:{
    //       ...prevState.LoginData,
          
    //     }
    //   }))
    // }

    handleEmailChange =(event)=>{
      this.setState({
        email:event.target.value
      })
    }

    handlePasswordChange = (event) =>{
      this.setState({
        password:event.target.value
      })
    }

    changetoJson(){
      var postjson = '{email'
    }

    // sendRegisterHandler = () => {}

    sendRegisterHandler = () => {
      axios.post('https://ablink-backend.azurewebsites.net/Auth/Register',
        {
          // email: 'jeffliu@ablink.com',
          // password: '1234Ab1234'
          Email: ${this.state.email},
          Password: ${this.state.password}
        },
        headers:{'Content-Type': 'application/json'})
        .then(response => {
          console.log(response);
        });

        axios.post('https://ablink-backend.azurewebsites.net/Auth/Register',
        {
          // 'email': 'jeffliu@ablink.com',
          // 'password': '1234Ab1234'
          'email': {this.state.email},
          'password': {this.state.password}
        },
        headers:{'X-Requested-With': 'XMLHttpRequest'})
        .then(response => {
          console.log(response);
        });
    }

    render() {
        return (

                <div className="base-container" ref={this.props.containerRef}>
                  <div className="header">Login</div>
                  <div className="content">
                    <div className="image">
                      <img src={"img/ablinklogo.png"} />
                    </div>
                    <div className="form">
                      <div className="form-group">
                        <label htmlFor="email">Username</label>
                        <input type="email"
                        value = {this.state.email}
                        onChange={this.handleEmailChange}
                        name="email"
                        placeholder="email" />
                      </div>
                      {/* <div><h1>{this.state.email}</h1></div> */}
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" value = {this.state.comments} onChange={this.handlePasswordChange} name="password" placeholder="password" />
                      </div>
                    </div>
                  </div>
                  <div className="footer">
                    <button type="button" className="btn" onClick={this.sendRegisterHandler} >
                      Login
                    </button>
                  </div>
                </div>

        )
    }
}

export default Login;