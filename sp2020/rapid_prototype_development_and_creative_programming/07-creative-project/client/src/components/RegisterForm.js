import React from 'react';
import Button from './Button';

class RegisterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            username: '',
            password: '',
            success: false
        };
    }

    register = () => {
        let username = document.getElementById("register-username").value;
        let password = document.getElementById("register-password").value;

        if (username == null || username == "" || password == null || password == "") {
            alert("must enter valid username or password");
        } else {
            document.getElementById("register-username").value="";
            document.getElementById("register-password").value="";
    
            let passExists = false;
    
            if (password) {
                passExists = true;
            }
    
            console.log("username", username);
            console.log("is there a password:", passExists);
    
            this.setState({
              username: username,
              password: password
            }, () => {
              console.log("loggin in attempt")
              fetch("/register", {
                      method: "POST",
                      body: JSON.stringify(this.state),
                      headers: {'content-type':'application/json'}
              })
              .then(res => res.json())
              .then(response => {
                this.setState({
                  connectionMessage: response.message,
                  success: response.success
                })
                if (!response.success) {
                  alert(response.message)
                } else {
                  alert("registered succesfully!");
                }
              })
            });
        }
    }
  
    render() {
      return (
            <div id="registe-form">
                <h2>Register</h2>
                <h5>Username:</h5>
                <input type="text" id="register-username" placeholder="username" name="username" required/>
                <h5>Password:</h5>
                <input type="password" id="register-password" placeholder="password" name="password" required/>
                <h6>Done?</h6>
                <Button someFunction={this.register} buttonName="register"/>
            </div>
        );
    }
  }

  export default RegisterForm;