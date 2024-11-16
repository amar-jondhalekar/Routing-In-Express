// this file store item specific route only \

const express = require('express');
const router = express.Router();

// middleware that is specific to this router 

const timelog = (req, res, next) => {
    console.log('Time:', Date.now());
    next()
}

router.use(timelog);

// define the home page route 
router.get('/', (req, res) => {
    res.send('Birds home page')
})

router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router;