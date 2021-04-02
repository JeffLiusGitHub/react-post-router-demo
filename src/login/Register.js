import React from 'react';
import "./style.scss";
import axios from 'axios';

class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    sendRegisterHandler = () => {
        axios.post('https://ablink-backend.azurewebsites.net/Auth/Register',
          {
            email: 'jeffliu@ablink.com',
            password: '1234Ab1234'
          })
          .then(response => {
            console.log(response);
          });
      }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
          <img src={"img/ablinklogo.png"} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.sendRegisterHandler}>
            Register
          </button>
        </div>
      </div>


        )
    }
}

export default Register;