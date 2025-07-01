const express = require('express');
const { createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require ('../controllers/workoutControllers.js');


const { get } = require('mongoose');



const router = express.Router();

router.get('/', getWorkouts);

router.get('/:id',  getWorkout);


router.post('/', createWorkout);


router.delete('/:id',  deleteWorkout);


router.patch('/',  updateWorkout);

module.exports = router;