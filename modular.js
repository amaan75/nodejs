
var fileModule = require('./file-browser.js');
fileModule(process.argv[2],process.argv[3],function readComplete(err,data){
  if(err){
  console.log(`Directory not found`);}
  else {
    data.forEach(function(currentValue){
      console.log(currentValue);
    })
  }
})
