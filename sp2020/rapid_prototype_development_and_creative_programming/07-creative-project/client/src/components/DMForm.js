import React from 'react';
import Button from './Button';
import * as socketFunctions from '../api'

class DMForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          to: "",
          message: "",
          success: false
      };
    }

  //   sendMessage = () => {
  //     let to = document.getElementById("to").value;
  //     let message = document.getElementById("message").value;
  //     document.getElementById("to").value="";
  //     document.getElementById("message").value="";

  //     console.log("to:", to);
  //     console.log("message:", message);

  //     this.setState({
  //       to: to,
  //       message: message
  //     }, () => {
  //       console.log("send message")
  //       fetch("/DM", {
  //               method: "POST",
  //               body: JSON.stringify(this.state),
  //               headers: {'content-type':'application/json'}
  //       })
  //       .then(res => res.json())
  //       .then(response => {
  //         this.setState({
  //           connectionMessage: response.message,
  //           success: response.success
  //         })
  //       })
  //     });
  // }
  sendMessage = () => {
    const message = document.getElementById("message").value;
    const recipient = document.getElementById("to").value;

    if (message == "" || message == null || recipient == null || recipient == ""){
      alert("cannot send empty fields");
      document.getElementById("message").value = "";
      document.getElementById("to").value = "";
    } else {
      console.log("message to " + recipient + " sent:", message);

      socketFunctions.messageToPerson(message, recipient);
      document.getElementById("message").value = "";
      document.getElementById("to").value = "";
    }
  }

  sendGroupMessage = () => {
    const message = document.getElementById("group_message").value;
    const stringOfPeople = document.getElementById("group_to").value;
    const recipients = stringOfPeople.split(',');
    console.log("recipients of group message array: " + recipients);
    let ok = false;
    
    if (message != null && message != '') {
      ok = true;
      for (let i = 0; i < recipients.length; i++) {
        if (recipients[i] == null || recipients[i] == '') {
          alert("please enter valid usernames!");
          document.getElementById("group_message").value = '';
          document.getElementById("group_to").value = '';
          ok = false;
          break;
        } else {
          ok = true;
        }
      }
    } else {
      ok = false;
      alert("message field must be nonempty!");
      document.getElementById("group_message").value = '';
      document.getElementById("group_to").value = '';
    }
    if (ok == true) {
      document.getElementById("group_message").value = '';
      document.getElementById("group_to").value = '';
      socketFunctions.messageToGroup(recipients, message);
    } 
  }

    render() {
      return (
        <div id="messaging">
          <h4>Send a direct message:</h4>
          <label>Send a message to: <input type="text" id="to" placeholder="username"/></label>
          <input type="text" id="message" placeholder="message"/>
          <Button someFunction={this.sendMessage} buttonName="Send Message"/>
          <h4>Send a group message:</h4>
          <p>Enter usernames seperated by a comma and no spaces!</p>
          <label>Send a message to: <input type="text" id="group_to" placeholder="usernames"/></label>
          <input type="text" id="group_message" placeholder="message"/>
          <Button someFunction={this.sendGroupMessage} buttonName="Send Group Message"/>
        </div>
      );
    }
  }

  export default DMForm;