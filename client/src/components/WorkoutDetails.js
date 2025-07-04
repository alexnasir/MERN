import React from 'react'
import useWorkoutContext from '../hooks/useAuthContext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutContext();

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    });
    const json = await response.json();
    
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
      console.log('Workout deleted:', json);
    } else {
      console.error('Error deleting workout:', json);
    }
  }
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p><strong>Load (kg): </strong>{workout.load} </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails
