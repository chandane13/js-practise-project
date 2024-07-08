require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
console.log("hello")

app.get('/', (req, res)=>{
    res.send("Hello World.")
})

app.get('/login', (req, res) => {
    res.send(`<h1>Please login below</h1><button>LOGIN</button>`)
})
app.listen(process.env.PORT, () => {
    console.log(`Example log listening at port ${port}`)
})