const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json ({ mssg: 'GET workouts'});
})

router.get('/:id', (req, res) => {
    res.json ({ mssg: 'Getting single workout'})
})


router.post('/', (req, res) => {
    res.json ({ mssg: 'POST workouts'});
})


router.delete('/', (req, res) => {
    res.json ({ mssg: 'DELETE workouts'});
})


router.patch('/', (req, res) => {
    res.json ({ mssg: 'UPDATE workouts'});
})

module.exports = router;