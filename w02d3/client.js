const net = require('net');
const args = require('yargs').argv;

const PORT = args.port || 8765;
const hostname = args.hostname || 'localhost';

const name = process.argv[2];
if (name) {
  const configObject = {
    port: PORT,
    host: hostname
  };
  const client = net.createConnection(configObject);
  console.log('typeof client', typeof client);
  console.log('client', client);

  client.setEncoding('utf8');

  client.on('connect', () => {
    console.log(`i have connected`);
    client.write(`setName ${name}`);
  });
  
  client.on('data', (data) => {
    console.log(`${data}`);
  });
  
  process.stdin.on('data', (message) => {
    client.write(message);
  });  
} else {
  console.log('usage: node client.js <name>');
}

