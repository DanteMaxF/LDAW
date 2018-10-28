var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

// setup template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// trigger controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('Listening to port 3000');