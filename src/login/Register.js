import React from 'react';
import "./style.scss";

class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containRef}>
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src="img/ablinklogo.png" alt="logo" />
                    </div>
                </div>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="userName">UserName</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">UserName</label>
                        <input type="email" name="email" placeholder="username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Register</button>
                </div>
            </div>


        )
    }
}

export default Register;