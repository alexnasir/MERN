require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workout');

const app = express();

// const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

app.use((req, res, next) => {
    res.json({ mssg: 'Welcome Api' });
  });
  
app.use('/api/workouts', workoutRoutes)

//connecting db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
app.listen(process.env.PORT, () => {
    console.log('Connected db and Server is running port 3000', process.env.PORT);
})
})
.catch((error) => {
 console.log(error);
})



