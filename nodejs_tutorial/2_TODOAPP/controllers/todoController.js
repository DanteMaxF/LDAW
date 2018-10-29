var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://test:testtodo1@ds243963.mlab.com:43963/tododb')

// Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: "Do my homework"}).save(function(err){
  if (err) throw err;
  console.log('Item saved');
});

var data = [{item: 'get milk'}, {item: 'wal dog'}, {item: 'finish this tutorial'}];
var urlEncondedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data})
  });

  app.post('/todo', urlEncondedParser, function(req, res){
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
  });

};
