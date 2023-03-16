const net = require('net');
const PORT = 8765;

const connectedClients = [];

const server = net.createServer();

const broadcast = (message, sender) => {
  for (let connectedClient of connectedClients){
    if (connectedClient !== sender){
      connectedClient.write(`${sender.name}: ${message}`);
    }
  }
};

server.on('connection', function(client){
  connectedClients.push(client);
  console.log(`a connection has been made from ${client.remoteAddress}`);
  client.setEncoding('utf8');

  client.write('Welcome to my awesome server! ⛵');

  client.on('data', (data) => {
    console.log('received message from client', data);
    if (data.startsWith('setName ')){
      const clientName = data.replace(/setName /, '');
      console.log(`setting client name to ${clientName}`);
      client.name = clientName;
    }
    broadcast(data, client);
  });

});

server.listen(PORT, () => {
  console.log(`Server is listening on PORT=${PORT}`);
});
