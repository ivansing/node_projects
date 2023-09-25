const http = require("http");
const hostname = '127.0.0.1';
const port = 5000;



const server = http.createServer((req, res) => {
  if(req.url === '/')
  {
    res.end('Welcome Homepage');
  } else if(req.url === '/about'){
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
     <p>We can't seem to find the page you are looking for</p>
     <a href="/">Back home</a>`)
  }
  
});

server.listen(port,hostname,() => {
  console.log(`Server running at http://${hostname}:${port}`)
});
