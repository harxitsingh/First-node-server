 const http = require('http');
 const fs = require('fs'); 

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Complete Coding </title></head>');
    res.write('<body><h1>Enter Your Details</h1></body>');
    res.write('<form action="/submit-details"  method ="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
     res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<br><input type = "submit" value="Submit">');
    res.write('</form>');
   

     res.write('</body');
    res.write('</html>');
    return res.end();
  }
  else if (req.url.toLocaleLowerCase () === "/submit-details" && req.method =="POST"){
   
    const body = [];
    req.on("data",(chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);
    });
    fs.writeFileSync('user.text', 'Harshit singh');
    res.statusCode = 302;
    res.setHeader('Location','/');
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title> Complete Coding </title></head>');
  res.write('<body><h1>Like</h1></body>');
  res.write('</html>');
  res.end();
});

const PORT = 3007;

server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});