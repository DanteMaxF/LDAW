// GLOBAL OBJECT

console.log('hello world');


var time = 0;

var timer = setInterval(function(){
  time += 2
  console.log(time + ' seconds have passed');
  if (time > 5){
    clearInterval(timer);
  }
}, 2000)

console.log(__dirname);
console.log(__filename);




// FUNCTION EXPRESSIONS
function callFunction(fun){
  fun();
}

var sayHi = function(){
  console.log('Hi');
};

sayHi();
callFunction(sayHi);
