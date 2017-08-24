var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var map = {};
var count = 0;
function readDataFromUrl(url,order,callback){
http.get(url,function (res){
  res.setEncoding('utf8');
  var rawData ='';
  res.on('data',function(data){
    rawData+=data;
  });
  res.on('error',console.error);
  res.on('end',function(){
    map[order] = rawData;
    callback(map);
  });
}).on('error',console.error);
}

readDataFromUrl(url1,1,logIt);
readDataFromUrl(url2,2,logIt);
readDataFromUrl(url3,3,logIt);

function logIt(map){
  count++;
  if(count === 3){
    console.log(map[1]);
    console.log(map[2]);
    console.log(map[3]);
  }
};
