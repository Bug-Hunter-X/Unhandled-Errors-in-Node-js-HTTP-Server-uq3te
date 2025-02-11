const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

//Use 'uncaughtException' to catch fatal errors that could otherwise crash your server
process.on('uncaughtException', (err) => {
  console.error('An uncaught exception occurred:', err);
  process.exit(1); //Exit with an error code, useful for logging purposes
});

//Use 'unhandledRejection' to catch promises that fail to reject
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform any necessary cleanup or error handling here
});

server.on('error', (err) => {
  console.error('Server error:', err);
  // Handle the error appropriately, e.g., retry, log, etc.
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});