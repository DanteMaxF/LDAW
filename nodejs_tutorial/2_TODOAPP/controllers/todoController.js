var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://test:testtodo1@ds243963.mlab.com:43963/tododb')

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);


//var data = [{item: 'get milk'}, {item: 'wal dog'}, {item: 'finish this tutorial'}];
var urlEncondedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    // Get data from mongoDB and pass it to the view
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('todo', {todos: data});
    });

  });

  app.post('/todo', urlEncondedParser, function(req, res){
    // Get data from view and add it to mongoDB
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      res.json(data)
    })
  });

  app.delete('/todo/:item', function(req, res){
    // Delete requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      res.json(data);
    });
  });

};
