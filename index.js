const express = require('express')
const app = express()
port = 4200

app.get('/', (req, res) => {
    console.log('Endpoint hit')
    res.send({message: 'Hello World'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})