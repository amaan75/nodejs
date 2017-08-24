var fs = require('fs');
module.exports = readTheDir;
function readTheDir(filePath,fileType,callback){
  fs.readdir(filePath,function doneReading(err,files){
    if(err)
    return callback(err)
    callback(null,files.filter(function(element){
      return element !== undefined;
    }))
  })};
  
