// Contains all client-side socket connections and emissions
// Learned from https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness- and https://www.freecodecamp.org/news/how-to-create-a-realtime-app-using-socket-io-react-node-mongodb-a10c4a1ab676/

import openSocket from 'socket.io-client';
import React from 'react';
import DM from './components/DM';

const socketio = openSocket('http://localhost:3001'); // connect to the socket

socketio.emit("message_to_server", { message: "hellooooo" });

export function setUsername(userName) {
    socketio.emit("set_username", { username: userName })
}

export function messageToAllServer(messageSent) {
    socketio.emit("message_to_all_server", { message: messageSent });
}

export function messageToPerson(message, recipient) {
    let info = {'message': message, 'to': recipient};
    socketio.emit("messageToPerson", info);
    console.log("messageToPerson invoked");
}

export function messageToGroup(recipients, message) {
    let info = {'message': message, 'group_recipients': recipients};
    socketio.emit("messageToGroup", info);
    console.log("messageToGroup invoked");
}
export function createNewChat(recipient) {
    socketio.emit("create_chatroom", recipient);
}

// cb is callback function
export function updateDMs(cb) {
    socketio.on('message_to_all_client', function(data) {cb(null, data)} );
}

export function logoutSocket() {
    socketio.emit("userLogOut")
}

// export default socketio
// export { setUsername, messageToAllServer, updateDMs }

socketio.on("sendMessage", function(msg_data){
    //private messages are in italics
    if (msg_data["recipient"] != null && msg_data['recipient'] != '') {
       document.getElementById("allDMs").appendChild(document.createElement("hr"));
       document.getElementById("allDMs").appendChild(document.createTextNode("Message from " + msg_data["sender"] + ": " + msg_data["message"]));
    } else {
       alert("cannot leave empty");
    }
 });

 socketio.on("group_error", function() {
     console.log("group socket error");
     alert("Uh oh, a user in the group does not exist or is not online!");
 });

 socketio.on("private_error", function() {
    console.log("socketio on error");
    alert("UH OH THE User does not exist or is not online!");
});
