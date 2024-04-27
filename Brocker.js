const aedes = require('aedes');
const net = require('net');

const broker = aedes();

const server = net.createServer(broker.handle);
const port = 1899;

server.listen(port, () => {
  console.log('MQTT broker is running on port', port);
});
