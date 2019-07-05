const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // // Solution 1
  // fs.readFile('test-file.txt', 'utf-8', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // // Solution 2 - Streams
  // Stream will be read much faster than the res.write can handle, a pipe is better - solution 3
  // const readable = fs.createReadStream('./test-file.txt');
  // readable.on('data', chunk => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  // readable.on('error', err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('file not found');
  // });

  // Solution 3 - Pipe
  const readable = fs.createReadStream('./test-file.txt');
  readable.pipe(res);
  // readbaleSource.pipe(destinToArrive - writable stream)
});

server.listen(8000, '127.0.0.1', () => console.log('Listening for requests'));
