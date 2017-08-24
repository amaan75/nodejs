var net = require('net');
var strftime = require('C:\\Users\\Amaan\\AppData\\Roaming\\npm\\node_modules\\strftime');
var server = net.createServer(
function listener(socket){
  // socket.write(data);
  // socket.end();
  socket.end(strftime('%F %H:%M')+"\n");
});

var port = process.argv[2];
server.listen(port);
