var events = require('events')
var util = require('util')


/*
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
  console.log(msg);
});

myEmitter.emit('someEvent', 'the event was emitted');
*/

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var dante = new Person('Dante');
var max = new Person('Maximiliano');
var mcwaffle = new Person('McWaffle');
var people = [dante, max, mcwaffle]

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said: '+msg);
  });
});

dante.emit('speak', 'sup brothers');
max.emit('speak', 'It is wednesday my dudes');
