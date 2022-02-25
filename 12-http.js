const http = require('http')

const server =http.createServer((req, res)=>{
    if (req.url==='/') {
     res.end('welcome to the home page')
    }
    if (req.url==='/about') {
        res.end('here is our short story')
       }
    res.end(`
    <h2>opps!</h2>
    <p>we cant seem to find page your looking for</p>
    <a href="/">back home</a>
    `)   
})