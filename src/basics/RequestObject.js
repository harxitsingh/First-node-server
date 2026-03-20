const http = require('http');

const server = http.createServer((req, res)  =>  {
  console.log(req.url, req.method, req.headers); // request object

  
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Complete Coding </title></head>')
    res.write('<body><h1>Like</h1></body>')
    res.write('</html>');
     res.end();
});

   const PORT = 3009;


   server.listen(PORT  , () => {
       console.log(`server running on address http://localhost:${PORT}`)
});




       
