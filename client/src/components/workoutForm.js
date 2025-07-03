import React, { useState } from 'react'
import useWorkoutContext from '../hooks/useAuthContext';

const WorkoutForm = () => {
    const [title, setTitle] = useState(''); 
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const {dispatch} = useWorkoutContext();

    const handleSubmit = async (e) => { 
        e.preventDefault();

        const workout = { title, reps, load };

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();
        if (!response.ok) {
            setError(json.error || 'An error occurred');
            setEmptyFields(json.emptyFields || []);
            console.error('Error adding workout:', json);
            return;
        }

        if (response.ok) {
            setTitle('');
            setReps('');
            setLoad('');

            console.log('New workout added:', json);
            dispatch({ type: 'ADD_WORKOUT', payload: json });

        } else {
            setError(json.error || 'An error occurred');
            console.error('Error adding workout:', json);
        }
    }
  return (
    <div>
      <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Title:</label>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          className={emptyFields.includes('title') ? 'error' : ''}
           />
          <label>Load(kg)</label>
        <input 
          type="number" 
          onChange={(e) => setLoad(e.target.value)} 
          value={load} 
          className={emptyFields.includes('load') ? 'error' : ''}

          />

        <label>Reps:</label>
        <input 
          type="number" 
          onChange={(e) => setReps(e.target.value)} 
          value={reps} 
          className={emptyFields.includes('reps') ? 'error' : ''}

          />

          <button className='btn'>Add Workout</button>
          {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default WorkoutForm
