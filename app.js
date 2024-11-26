const express = require('express')
const app = express()


const hostname = process.env.HOSTNAME ?? "localhost"
const port = process.env.PORT ?? 5000

console.log('hostname', hostname, port)


//midddleware


// Connecting with database


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
// Server start process
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`)
  })