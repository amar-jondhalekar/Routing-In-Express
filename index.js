const express = require('express')
const app = express()
const port = 3000

// import item route file 
const item = require('./routes/item');
const birds = require('./routes/birds');
// load into application 
app.use('/api', item);
app.use('/filler', birds);

// -> /api/ -> item home page
// -> /api/items -> item post request 
// -> /api/items/id -> put/delete request 


app.listen(port, () => {
    console.log(`Amar App listeining on port ${port}`)
})