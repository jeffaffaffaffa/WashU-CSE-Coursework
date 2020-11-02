// Require the packages we will use:
const http = require("http"),
	socketio = require("socket.io"),
	fs = require("fs");

// The list of all users. It will contain user objects with user id and username
let users = [] //FIXME: should this be an object?

// An object that will contain all rooms on the server. "default" is the first chatroom on the server and
// users can add more. Each chatroom will contain the chatroom's name and the admin's name. The admin is the 
// creator of the room.
let rooms = {
	'default': {
		'chatRoomName': 'default',
		'admin': "God"
	}
}

// An object that will contain the current information for each room. Importantly, it keeps track of the users
// curretnly in one chatroom.
let currentRooms = {
	'default': {
		'chatRoomName': 'default',
		'users': [] // FIXME: should this be an object?
	}
}

// Listen for HTTP connections.  This is essentially a miniature static file server that only serves our one file, client.html:
let app = http.createServer(function(req, resp){
	// This callback runs when a new connection is made to our HTTP server.
	
	fs.readFile("client.html", function(err, data){
		// This callback runs when the client.html file has been read from the filesystem.
		if(err) return resp.writeHead(500);
		resp.writeHead(200);
		resp.end(data);
	});
});
app.listen(3456);

// app.use(express.static('/home/edchandler/public_html/module6/group'));

// Do the Socket.IO magic:
let io = socketio.listen(app);
io.sockets.on("connection", function(socket){
	// This callback runs when a new Socket.IO connection is established.
	
	/** 
	 * This is called after a connection is made with the client. This will create the user's object and
	 * set up the chatroom for the user.
	*/
	socket.on("add_nickname", function(data) { //FIXME: Should we allow for duplicate usernames??
		let usernameExists = !!(users.find(user => user.username == data)); // Check if username already exists

		if (data == null || data == '') {
			socket.emit("failed_username", "empty");
  		} else if (usernameExists) {
  			socket.emit("failed_username", "usernameExists");
		} else {
			console.log("add_nickname", data, "("+socket.id+")");
			// console.log(socket.id)
			
			// The user's object.
			let userObj = {
				'id': socket.id, // The unique identifier
				'username': data
			}

			socket.userObj = userObj;

			// Set the room of the user to default
			socket.room=rooms['default'].chatRoomName;
			socket.join(socket.room);

			// Add the user to both user list and to the list of users in the default chatroom
			users.push(userObj);
			currentRooms[socket.room].users.push(userObj);
			console.log(currentRooms[socket.room].users);

			// Send callbacks to client
			socket.emit("updateRooms", rooms, socket.room); // TODO: check that this is okay!
			io.to(socket.room).emit("who", currentRooms[socket.room].users); // Display all users in the chatroom
		}
		
	});
	
	/**
	 * Create a new chatroom, set the admin (creator) in the chatroom, and display it in the chatroom list for everyone.
	 */
	socket.on('create_chatroom', function(data) {
		console.log(data == null || !(rooms[data]));
		if (data == null || data == '' || rooms[data]) { // Check that the chatroom name is not null, an empty string, or already a chatroom name
			socket.emit("failed_create");
		} else {
			console.log('create_chatroom', data);
			rooms[data] = {
				'chatRoomName': data,
				'admin': socket.id
			}
	
			currentRooms[data] = {
				'chatRoomName': data,
				'users': [],
				'bannedUsers': []
			}
	
			changeRoomsHelper(data);
	
			// Iterate over all rooms and update the room list
			let roomNames = Object.keys(rooms);
			for (let i = 0; i<roomNames.length; i++) { 
				io.to(roomNames[i]).emit("addRoom", rooms, roomNames[i]);
			}
	
			io.to(socket.room).emit("who", currentRooms[socket.room].users); // Display all users in the chatroom
		}
	});

	/**
	 * Create a new PRIVATE chatroom, set the admin (creator) in the chatroom, and display it in the chatroom list for everyone.
	 */
	socket.on('create-private-room', function(room, password) {
		console.log(room == null || !(rooms[room]));
		if (room == null || room == '' || rooms[room]) { // Check that the chatroom name is not null, an empty string, or already a chatroom name
			socket.emit("failed_create");
		} else {
			console.log('create_chatroom', room);
			rooms[room] = {
				'chatRoomName': room,
				'admin': socket.id
				//'password': password
			}
	
			currentRooms[room] = {
				'chatRoomName': room,
				'users': [],
				'bannedUsers': [],
				'password': password
			}
	
			changeRoomsHelper(room);
	
			// Iterate over all rooms and update the room list
			let roomNames = Object.keys(rooms);
			for (let i = 0; i<roomNames.length; i++) { 
				io.to(roomNames[i]).emit("addRoom", rooms, roomNames[i]);
			}
	
			io.to(socket.room).emit("who", currentRooms[socket.room].users); // Display all users in the chatroom
		}
	});

	/**
	 * Join a chatroom and leave the old one.
	 */
	socket.on('join_chatroom', function(data) {
		console.log("join chatroom", data);
		console.log(rooms[data]);
		console.log(!rooms[data]);
		console.log(data == null || !(rooms[data]));

		//if there is a password, send to frontend and ask for password
		if(!!currentRooms[data] && currentRooms[data]["password"]) {
			socket.emit("password-check", currentRooms[data]["chatRoomName"]);
		} else {
			if (data == null || !(rooms[data])) {
				socket.emit("failed_join");
			} else {
				console.log("bannedUsers", currentRooms[data].bannedUsers);
				let userBanned = (data == 'default') ? false : currentRooms[data].bannedUsers.find(element => element.id == socket.userObj.id); //TODO: use this instead of looping through
				console.log('userBanned', userBanned);
				
				// let userBanned = true;
				if (!userBanned) {
					let admin = rooms[data].admin;
					let isAdmin = true;

					if (admin != socket.userObj.id) {
						isAdmin = false;
					} else {
						isAdmin = true;
					}

					console.log('join_chatroom', data);
	
					changeRoomsHelper(data);
	
					socket.emit("updateRooms", rooms, socket.room, isAdmin); // TODO: check that this is okay!
					io.to(socket.room).emit("who", currentRooms[socket.room].users); // Display all users in the chatroom
				} else {
					socket.emit("banned_alert");
				}
			}
		}
	});

	//issue in here
	socket.on("join-with-password", function(room, pass_guess) {
		let admin = rooms[room].admin;
		let isAdmin = true;

		if (admin != socket.userObj.id) {
			isAdmin = false;
		} else {
			isAdmin = true;
		}
		if (currentRooms[room]["password"] != pass_guess) {
			socket.emit("failed_join_wrong_pass");
		} else {
			// console.log("bannedUsers", currentRooms[room].bannedUsers);
			let userBanned = (!currentRooms[room].bannedUsers) ? false : currentRooms[room].bannedUsers.find(element => element.id == socket.userObj.id); //TODO: use this instead of looping through
			console.log('userBanned', userBanned);
			
			// let userBanned = true;
			if (!userBanned) {
				console.log('join_chatroom', room);

				changeRoomsHelper(room);

				socket.emit("updateRooms", rooms, socket.room, isAdmin); // TODO: check that this is okay!
				io.to(socket.room).emit("who", currentRooms[socket.room].users); // Display all users in the chatroom
			} else {
				socket.emit("banned_alert");
			}
		}
	});

	/**
	 * Helper method to change a user's room
	 * @param {string} data 
	 */
	function changeRoomsHelper(data) {
		socket.leave(socket.room);
		// Remove user from list of users in the default chatroom
		console.log("compare", currentRooms[socket.room].users[0] == socket.userObj);
		currentRooms[socket.room].users = currentRooms[socket.room].users.filter(user => user != socket.userObj);

		// Remove the user from the list
		io.to(socket.room).emit("who", currentRooms[socket.room].users); // Get rid of the user from the list of users in the chatroom

		socket.room=data; //FIXME: why does it save name strangely? look at io.sockets.rooms
		socket.join(socket.room);
		
		// Add user to the new chatroom
		currentRooms[socket.room].users.push(socket.userObj);
		console.log(currentRooms);
	}

	/**
	 * Enter a message in a chatrooom and send the information to the frontend. 
	 */
	socket.on('message_to_server', function(data) {
		console.log(socket.userObj.username, "in", socket.room, "message: "+data["message"]); // log it to the Node.JS output
		if (data["message"] == "/help") {
			io.to(socket.room).emit('update_chatroom', {
				user: "bot", 
				message: "commands: /help: Get help for other commands. /who: See admin for room. /features: List chatroom features.", 
				chatroom: socket.room });
		} else if (data["message"] == "/who") {
			io.to(socket.room).emit('update_chatroom', {
				user: "bot", 
				message: "admin: " + (socket.room == "default" ? rooms["default"].admin : io.sockets.sockets[rooms[socket.room].admin].userObj.username), 
				chatroom: socket.room });
		} else if (data["message"] == "/features") {
			io.to(socket.room).emit('update_chatroom', {
				user: "bot", 
				message: "Create chatroom with 'create chatroom' button. Create private chatroom with password with 'create chatroom with password' button. \
					Join a chatroom either by clicking one from the list of Available Chatrooms or typing in its name. Send a message either 1. to the whole chatroom with \
					2. privately to a member in the chatroom 3. to a random person in the chatroom.", 
				chatroom: socket.room });
		} else {
			// This callback runs when the server receives a new message from the client.
			io.to(socket.room).emit('update_chatroom', {
				user: socket.userObj.username, 
				message: data["message"], 
				chatroom: socket.room });
		}	
	});

	//takes in recipient and message from front end and emits to hello
	socket.on("sendPrivateMsg", function(data) {
		//private messages

		io.of('/').in(socket.room).clients((error, socketIds) => { 
			if (error) throw error;

			let theUser = currentRooms[socket.room].users.find(user => user.username == data.recipient); // Get the user object from users array

			if (!theUser) {
				socket.emit('hello', { // Send message to sender
					sender: socket.userObj.username,
					recipient: null,
					message: null,
					chatroom: socket.room });
			} else {
				recipientSocket = io.sockets.sockets[theUser.id]; // Get the recipient's socket

				recipientSocket.emit('hello', { // Send message to recipient
					sender: socket.userObj.username,
					recipient: data["recipient"],
					message: data["message"],
					chatroom: socket.room 
				});

				socket.emit('hello', { // Send message to sender
					sender: socket.userObj.username,
					recipient: data["recipient"],
					message: data["message"],
					chatroom: socket.room
				});
			}
		});
	});


	//TODO: sendRandomDm (chat roulette), not too sure how to find a random user to send to
         //can still use emit to hello, just need to find the random user

	socket.on("sendRandomDm", function(data) {
		io.of('/').in(socket.room).clients((error, socketIds) => { 
			if (error) throw error;

			console.log("random data", data);

			if (socketIds.length < 2) {
				socket.emit('hello_random', {
					status: 'failure',
					message: "Nobody in chat to talk to."
				})
			} else {
				let randomUserSocketId = false;

				while (!randomUserSocketId) {
					randomUserSocketId = socketIds[Math.floor(socketIds.length * Math.random())]; // Choose a random person to chat
					console.log("rando", randomUserSocketId)

					if (randomUserSocketId == socket.id) {
						randomUserSocketId = false; // Check that the random user is not yourself
					}
				}
				console.log('left')
				let randomUserSocket = io.sockets.sockets[randomUserSocketId];

				randomUserSocket.emit('hello_random', {
					status: "success",
					sender: socket.userObj.username,
					recipient: randomUserSocket.userObj.username,
					message: data.message,
					chatroom: socket.room,
					role: "receiver" // Tells the front end that you recievd the message
				})
				socket.emit('hello_random', {
					status: "success",
					sender: socket.userObj.username,
					recipient: randomUserSocket.userObj.username,
					message: data.message,
					chatroom: socket.room,
					role: "sender" // Tells the front end that you sent the message
				})
			}
		});
	});

	socket.on("changeRoom", function(data) {
		console.log("changeRoom", data);
	});

	socket.on("createPrivate", function(data) {
		console.log("createPrivate", data);
	});
	
	socket.on("joinPrivate", function(data) {
		console.log("joinPrivate", data)
	});

	//FIXME: what happens when kicking or banning someone not in the chat??
	
	/**
	 * This is called to kick a person out of the chatroom. The user can still re-enter the room after being
	 * kicked, unlike ban_person.
	 */
	socket.on("kick_person", function(data) { 
		if (socket.userObj.id == rooms[socket.room].admin) {
			if (socket.userObj.username == data) {
				console.log("error: trying to ban yourself");
				socket.emit("cant_kick_or_ban", 'kickBanAdminAttempt');
			} else {
				console.log("correct admin");
				console.log("kick_person", data);
				removeSocketHelper(data,"kick");
			}
		} else {
			console.log("incorrect admin!");
			socket.emit("cant_kick_or_ban");
		}
	});

	/**
	 * This is called to ban a person from the chatroom. The user cannot  re-enter the room after being
	 * kicked, unlike kick_person.
	 */
	socket.on("ban_person", function(data) {
		if (socket.userObj.id == rooms[socket.room].admin) {
			if (socket.userObj.username == data) {
				console.log("error: trying to ban yourself");
				socket.emit("cant_kick_or_ban", 'kickBanAdminAttempt');
			} else {
				console.log("correct admin");
				console.log("ban_person", data);
				removeSocketHelper(data,"ban");
			}
		} 
		else {
			console.log("incorrect admin!");
			socket.emit("cant_kick_or_ban", "incorrectAdmin");
		}
	});

	function removeSocketHelper(data, banOrKick) {
		// solution inspired by https://github.com/socketio/socket.io/issues/3042
		io.of('/').in(socket.room).clients((error, socketIds) => {
			if (error) throw error;

			socketIds.forEach(socketId => {
				tempSocket = io.sockets.sockets[socketId]
				console.log(tempSocket.userObj.username);
				if (tempSocket.userObj.username == data) { //FIXME: if allowing for multiple usernames, this will break
					tempSocket.leave(socket.room);

					currentRooms[socket.room].users = currentRooms[socket.room].users.filter(user => user != tempSocket.userObj);
					io.to(socket.room).emit("who", currentRooms[socket.room].users);

					tempSocket.room='default'; //FIXME: why does it save name strangely? look at io.sockets.rooms
					tempSocket.join('default');
					
					// Add user to the default chatroom
					currentRooms['default'].users.push(tempSocket.userObj);

					// socket.emit("updateRooms", rooms, socket.room); 
					tempSocket.emit("updateRooms", rooms, 'default');
					io.to('default').emit("who", currentRooms['default'].users); // Display all users in the chatroom

					if (banOrKick == "ban") {
						currentRooms[socket.room].bannedUsers.push(tempSocket.userObj);
						console.log('newly banned user', currentRooms[socket.room].bannedUsers);
						tempSocket.emit("banned_alert");
						io.to(socket.room).emit('update_chatroom', {
							user: "bot", 
							message: tempSocket.userObj.username + "has been banned from the chat", 
							chatroom: socket.room });
					} else {
						tempSocket.emit("kicked_alert");
						io.to(socket.room).emit('update_chatroom', {
							user: "bot", 
							message: tempSocket.userObj.username + " has been kicked from the chat", 
							chatroom: socket.room });
					}
					// break;
				}
			});
		});
	}

	socket.on("disconnect", function() {
		//TODO: check that this is good
		if (socket.userObj) { // Check that the user has successfully logged in before trying to delete from the objects
			console.log("socket disconnecting:", socket);
			console.log(socket.userObj.username, "disconnecting...");
			currentRooms[socket.room].users = currentRooms[socket.room].users.filter(user => user != socket.userObj);
			console.log('currentRoom', currentRooms[socket.room].users);
			users = users.filter(user => user != socket.userObj);
			console.log('usersList', users);
	
			//TODO: check if the user has set up any chatrooms and destroy them if they have (NOTE: this will be deleted if we use a database)
	
			io.to(socket.room).emit("who", currentRooms[socket.room].users);
		}
	});
});