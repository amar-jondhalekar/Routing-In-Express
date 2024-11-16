// this file store item specific route only \

const express = require('express');
const router = express.Router();

// // middleware that is specific to this router 

// const timelog = (req, res, next) => {
//     console.log('Time:', Date.now());
//     next()
// }

// router.use(timelog);

// define the home page route 
router.get('/', (req, res) => {
    res.send('Got a GET request');
    //res.sendFile('./dummy.html', {root:__dirname})
});

router.post('/items', (req, res) => {
    res.send('Got a POST request');
})

router.put('/items/:id', (req, res) => {
    res.send('Got a PUT request');
})

router.delete('/items/:id', (req, res) => {
    res.send('Got a DELETE request');
})


module.exports = router;