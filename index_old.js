const http = require('http');
const uuid = require("uuid").v1;

const hostname = '127.0.0.1';
const port = 80;



const server = http.createServer((req, res) => {
    const jsonData = {
    name:"shahid",
    email:"shahid@abc.com",
    id:uuid()
}
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(jsonData));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});