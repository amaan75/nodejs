var http = require('http');
var url = process.argv[2];
http.get(url,function (res){
  res.setEncoding('utf8');
  var rawData ='';
  res.on('data',function(data){
    rawData+=data;
  });
  res.on('error',console.error);
  res.on('end',function(){
    console.log(rawData.length);
    console.log(rawData);
  });
}).on('error',console.error);
