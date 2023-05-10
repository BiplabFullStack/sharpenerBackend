const http = require('http');
const port = process.env.PORT ||4000;
const server = http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader('content-type','text/html')
    res.end('<h1>Biplab Roy</h1>')

})
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})