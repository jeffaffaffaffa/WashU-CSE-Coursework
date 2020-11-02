import React from 'react';
import Button from './Button';
// import App from '../App';

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            username: '',
            password: '',
            success: false,
        };
    }

    login = () => {
        let username = document.getElementById("login-username").value;
        let password = document.getElementById("login-password").value;

        if (username == null || username == "" || password == null || password == "") {
            alert("must enter valid username or password");
        } else {
            document.getElementById("login-username").value="";
            document.getElementById("login-password").value="";
    
            let passExists = false;
    
            if (password) {
                passExists = true;
            }
    
            console.log("username", username);
            console.log("is there a password:", passExists);
    
            this.setState({
              username: username,
              password: password,
              // option: 'login'
            }, () => {
              console.log("loggin in attempt")
              fetch("/login", {
                      method: "POST",
                      body: JSON.stringify(this.state),
                      headers: {'content-type':'application/json'}
              })
              .then(res => res.json())
              .then(response => {
                this.setState({
                  connectionMessage: response.message,
                  success: response.success
                });
                
                if (response.success === true){
                    fetch('/hello')
                    .then(res => res.json())
                    .then(response => {
                      console.log('loginform response', response)

                      // console.log("response", response)
                      if (response.loggedIn) {
                        alert("logged in!");
                        this.props.action(response.feed, response.username, response.theme);
                      }
                    })
                } else {
                  alert(response.message)
                }
              })
            });
        }
    }
  
    render() {
      return (
            <div id="login-form">
                <h2>Login</h2>
                <h5>Username:</h5>
                <input type="text" id="login-username" placeholder="username" name="username" required/>
                <h5>Password:</h5>
                <input type="password" id="login-password" placeholder="password" name="password" required/>
                <h6>Done?</h6>
                <Button someFunction={this.login} buttonName="Login"/>
            </div>
        );
    }
  }

  export default LoginForm;