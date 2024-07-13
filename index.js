const express = require("express")
const app = express()
require('dotenv').config()
const path = require('path')

const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     return res.render('index')
// })

app.use('/', require('./routes/index'))

const IP = "http://13.228.168.98/"

app.listen(PORT, IP, () => {
    console.log(`Server running at http://localhost:${PORT}:${IP}`)
});