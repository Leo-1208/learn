const express = require('express')
require('dotenv').config()
const app = express()
const port=4000

app.get('/', (a,b,c)=>{
    b.send('Hello World');

})
app.get('/shrey', (req, res)=>{
    res.send('I am shreyash');
})
app.listen(process.env.PORT, ()=>{
    console.log(`Example app is listening on port ${process.env.PORT}`)
})