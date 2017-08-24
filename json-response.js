var url = require('url');
var http = require('http');
var strftime = require('C:\\Users\\Amaan\\AppData\\Roaming\\npm\\node_modules\\strftime');
var server = http.createServer(function(req,res){
if(req.method !== 'GET'){
  return res.end('SEND ME A GET!');
}
var urlObj = url.parse(req.url,true);
  res.writeHead(200,`Successful!`,{'Content-Type':'application/json'});
  if(urlObj.pathname.endsWith('/parsetime')){
    var result = new Date(urlObj.query.iso);
    res.end(JSON.stringify({
      'hour':result.getHours(),
      'minute':result.getMinutes(),
      'second':result.getSeconds()
    }));
  }
   if(urlObj.pathname.endsWith('/unixtime')){
    var result = new Date(urlObj.query.iso).getTime();
    var map = {};
    map['unixtime']=result;
    res.end(JSON.stringify(map));
  }
});


function splitString(stringToSplit,spliter){
  return stringToSplit.split(spliter);
}

server.listen(process.argv[2]);
