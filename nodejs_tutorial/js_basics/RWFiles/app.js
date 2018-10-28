var fs = require('fs');
/*
var readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);
*/

fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data);
});
