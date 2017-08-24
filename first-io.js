var fs = require('fs');
var resultString = fs.readFileSync(process.argv[2],'utf8');
var resultStringArray = resultString.split('\n');
console.log(resultStringArray.length - 1);
