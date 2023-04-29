const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next)=>{
console.log("Middleware");
next()
})
app.use((req,res,next)=>{
   console.log("next Middleware");
    })

const server = http.createServer(app)


server.listen(8080)