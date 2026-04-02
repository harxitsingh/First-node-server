const http = require('http');

const server = http.createServer((req, res)  =>  {
  console.log(req);
  process.exit(); //Stops event Loop 
});

   const PORT = 3003;
server.listen(PORT  , () => {
  console.log(`server running on address http://localhost:${PORT}`)
});


       