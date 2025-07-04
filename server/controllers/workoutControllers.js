const Workout = require('../models/workoutModel')
const mongoose = require('mongoose');

// Get all workouts

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
}

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid workout ID' });
    }

    const workout = await Workout.findById(id);
    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json(workout);
}

// Create a new workout

const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    // Validate the input
    let emptyFields = [];
    if (!title) {
        emptyFields.push('title');
    }
    if (!load) {
        emptyFields.push('load');
    }
    if (!reps) {
        emptyFields.push('reps');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid workout ID' });
    }

    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json({ message: 'Workout deleted successfully' });
}


// Update a workout

const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid workout ID' });
    }

    const workout = await Workout.findByIdAndUpdate(_id, id, ...req.body, { new: true });
    if (!workout) {
        return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json(workout);
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}
