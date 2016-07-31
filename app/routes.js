// load the todo model
// var Todo = require('./models/todo');
var socketio = require('./socketio.js');

// expose the routes to our app with module.exports
module.exports = function(app,wagner,socketIo) {


    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/user', function(req, res) {

        console.log("get");
        // res.jsonp({ message: 'hooray! from get!' });\
        res.jsonp({ user : 'tobi' });
    });

    // create todo and send back all todos after creation
    app.post('/api/user', function(req, res) {
	console.log(req.body);
	//name.push(req.body.name);
        res.json({ message: 'from post' });
	socketIo.updateUser(req.body.name);

//	socketio(io,user);


    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {

        console.log("delete");

    });
    
};
