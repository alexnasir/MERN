require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user');


const app = express();

// const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next(); 
});

  
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connecting db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
app.listen(process.env.PORT, () => {
    console.log('Connected db and Server is running port', process.env.PORT);
})
})
.catch((error) => {
 console.log(error);
})



