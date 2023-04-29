const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next)=>{
console.log("Middleware");
next()
})
app.use((req,res,next)=>{
   console.log("next Middleware");
   res.send("<h1>Hello</h1>")
    })

app.listen(8080)