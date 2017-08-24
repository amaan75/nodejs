var fs = require('fs');
fs.readFile(process.argv[2],'utf8',function doneReading(err,data){
  var resultArray=data.split('\n').length-1;
  console.log(resultArray);
});
