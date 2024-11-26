const express = require('express')
const connectDatabase = require('./src/config/dbconfig')
const app = express()


const hostname = process.env.HOSTNAME ?? "localhost"
const port = process.env.PORT ?? 5000

console.log('hostname --->',hostname,', port --->', port)
// Connecting with database
connectDatabase()


//Middleware




// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
  })


// Server start process
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
  })