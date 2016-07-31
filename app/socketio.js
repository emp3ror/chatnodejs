var socketio = function () {

    //var users = [];
}

socketio.prototype.users = [];

socketio.prototype.start = function(io){
            console.log("from start");
    var that = this.users;
    var people = {};
	io.on('connection', function(client){

	    console.log(client.id);

	    client.on("join", function(name){
		people[client.id] = name;
		client.emit("update","you have connected");
		io.emit('user connected', name);
	    });

	    //console.log('a user connected');
	    //console.log(that);
	    //io.emit('user connected', "connected");

	    client.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.sockets.emit('chat message', people[client.id],msg);
	    });

	    client.on('disconnect',function () {
		console.log('user disconnect');
		io.emit('user disconnected', "disconnected");
	    });

	    
	
	});
    }
    /*function updateUser (user) {
	this.user.push(user);
    }*/


socketio.prototype.updateUser = function (user) {
    console.log(user);

    this.users.push(user);
        console.log(this.users);
}
module.exports = exports = new socketio();
