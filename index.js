var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);


/*variable*/
var name = [];


app.use(bodyParser());

app.get('/',function (req, res) {
	// res.send("<h1>hello world</h1>");
	res.sendFile(__dirname+'/chat.html');
});

app.post('/',function (req,res) {
	console.log("here i m");
	// res.render('chat', {
	// 	name : req.body.name
	// }, function (err,html) {
	// 	res.send('done')
	// });

	name.push(req.body.name);
	console.log(name);

	res.sendFile(__dirname+'/chat.html');
})

/*app.get('/chat',function (req, res) {
	// res.send("<h1>hello world</h1>");
	res.sendFile(__dirname+'/chat.html');
});*/

io.on('connection',function(socket) {
	console.log('a user connected');
	io.emit("user connected"," connected");

	socket.on('disconnect',function () {
		console.log('user disconnect');
		io.emit('user disconnected', "disconnected");
	});

	socket.on('chat message',function (msg) {
		console.log('message : '+msg);
		io.emit('chat message',msg);
	})
})

http.listen(3000,function () {
	console.log('listening on *:3000');
})
