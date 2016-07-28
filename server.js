var express = require('express');
app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var morgan = require('morgan');

 var port     = process.env.PORT || 8080;

/*app.get('/', function(req, res){
  res.sendfile('public/chat.html');
  });*/
app.use(morgan('dev'));
app.use(express.static('public'));


/*app.post('/api/user',function (req, res){
    res.send('hey');
    }) ;*/

require('./app/routes.js')(app);

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
	console.log('message: ' + msg);
	io.emit('chat message', msg);
    });
    
});


// app.listen(port);
   // console.log("App listening on port " + port);


http.listen(port,function(){
  console.log('listening on *:'+port);
});
