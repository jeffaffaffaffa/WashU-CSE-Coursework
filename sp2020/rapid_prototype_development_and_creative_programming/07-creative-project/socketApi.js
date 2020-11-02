// Solution from https://stackoverflow.com/questions/24609991/using-socket-io-in-express-4-and-express-generators-bin-www
const socketio = require("socket.io");
const io = socketio();
let socketApi = {}; //FIXME: or const?

socketApi.io = io;

console.log('socket file')

let users = {}

// // An object that will contain all rooms on the server. "default" is the first chatroom on the server and
// // users can add more. Each chatroom will contain the chatroom's name and the admin's name. The admin is the 
// // creator of the room.
let oneOnOneRooms = {}

// let groupRooms = {
// 	// 'default': {
// 	// 	'id': ''
// 	// 	'users':  
// 	// }
// }

io.sockets.on("connection", function (socket) {
	console.log('connection:', io)
	console.log("Socket connected. id:", socket.id);
	socket.room = "dm_feed";


	// This callback runs when a new Socket.IO connection is established.

	socket.on('message_to_server', function (data) {
		// This callback runs when the server receives a new message from the client.

		console.log("message: " + data["message"]); // log it to the Node.JS output
		// io.sockets.emit("message_to_client",{message:data["message"] }) // broadcast the message to other users
	});

	socket.on('message_to_all_server', function (data) {
		console.log("message: " + data["message"]); // log it to the Node.JS output
		io.sockets.emit("message_to_all_client", { from: socket.username, message: data["message"] }); // broadcast the 
	})

	socket.on('set_username', function (data) {
		console.log("setting username: " + data.username);

		if (data.username == null || data.username == '') {
			socket.emit("error_handle", "Uh oh");
		} else {
			socket.username = data.username; // Set the socket username
			users[data.username] = {
				'user': data.username,
				'socketid': socket.id
			}
			socket.join("dm_feed");
		}
	})

	socket.on('messageToPerson', function (info) {
		// console.log(room == null || !(rooms[room]));
		if (info.to == null || info.to == '') {
			console.log("failed to send message to: " + info.to);
		} else {
			console.log('sending message to: ' + info.to);
			console.log("users info to: " + users[info.to]);
			console.log("info to: " + info.to);
			if (users[info.to] != undefined) {
				recipientSocket = io.sockets.sockets[users[info.to].socketid];
				let msg_data = {
					'message': info.message,
					'recipient': info.to,
					'sender': socket.username
				}
				console.log("inside message to person if statement");
				socket.emit("sendMessage", msg_data);
	
				if(info.to != socket.username){
					recipientSocket.emit("sendMessage", msg_data);
				}
			} else {
				let stuff = "Uh oh,";
				console.log("socket emit error");
				socket.emit("private_error");
			}
		}
	});

	socket.on('messageToGroup', function (info) {
		// console.log(room == null || !(rooms[room]));
		let msg_dataa = {
			'message': info.message,
			'recipient': socket.username,
			'sender': socket.username
		}
		socket.emit("sendMessage", msg_dataa);

		for (let i = 0; i < info.group_recipients.length; i++){
		
			if (info.group_recipients[i] == null || info.group_recipients[i] == '') {
				console.log("failed to send message to: " + info.group_recipients[i]);
				break;
			} else {
				console.log('sending message to: ' + info.group_recipients[i]);

				if (users[info.group_recipients[i]] != undefined){
					recipientSocket = io.sockets.sockets[users[info.group_recipients[i]].socketid];
					let msg_data = {
						'message': info.message,
						'recipient': info.group_recipients[i],
						'sender': socket.username
					}
					console.log("inside message to person (group) if statement");
		
					if(info.group_recipients[i] != socket.username) {
						recipientSocket.emit("sendMessage", msg_data);
					}
					
				} else {
					socket.emit("group_error");
				}
			}
		}
	});

	// handles taking user out of the users object if the user logs out
	socket.on("userLogOut", function() {
		console.log(users)
		delete users[socket.username]
		console.log(users)
	})
	
	// handles taking user out of the users object if the user closes browser
	socket.on("disconnect", function() {
		//TODO: check that this is good
		console.log(users)
		delete users[socket.username]
		console.log(users)
	});
});


module.exports = socketApi;