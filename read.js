
var fs = require('fs');
fs.readFile('hello.js', 'utf-8',function(err, data) { if (err) {
console.error(err); } else {
        console.log(data);
      }
});