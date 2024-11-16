const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// get request 

app.get('/', (req, res) => {
    res.send('Got a GET request');
})

app.post('/items', (req, res) => {
    res.send('Got a POST request');
})

app.put('/items/:id', (req, res) => {
    res.send('Got a PUT request');
})

app.delete('/items/:id', (req, res) => {
    res.send('Got a DELETE request');
})

app.listen(port, () => {
    console.log(`Amar App listeining on port ${port}`)
})