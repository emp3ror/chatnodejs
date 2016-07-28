// load the todo model
// var Todo = require('./models/todo');

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/user', function(req, res) {

        console.log("get");
        // res.jsonp({ message: 'hooray! from get!' });\
        res.jsonp({ user : 'tobi' });
    });

    // create todo and send back all todos after creation
    app.post('/api/user', function(req, res) {

        res.jsonp({ message: 'from post' });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function(req, res) {

        console.log("delete");

    });
    
};