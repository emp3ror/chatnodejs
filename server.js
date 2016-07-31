var express = require('express');
app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var morgan = require('morgan');
var wagner = require('wagner-core');
var bodyParser = require('body-parser');

var port     = process.env.PORT || 8080;


var name = [];

var socketIo = require('./app/socketio.js');

var startio = socketIo.start(io);
socketIo.updateUser("hey");
socketIo.updateUser("there");
/*app.get('/', function(req, res){
  res.sendfile('public/chat.html');
  });*/
app.use(morgan('dev'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


/*app.post('/api/user',function (req, res){
    res.send('hey');
    }) ;*/

var dependencies = require("./app/dependencies.js")(wagner);

require('./app/routes.js')(app,wagner,socketIo);




// app.listen(port);
   // console.log("App listening on port " + port);


http.listen(port,function(){
  console.log('listening on *:'+port);
});  
 
