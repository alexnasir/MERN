import  {useEffect} from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/workoutForm';
import useWorkoutContext from '../hooks/useAuthContext';

const Home = () => {
 const {workouts, dispatch} = useWorkoutContext();
useEffect (() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');
        const data = await response.json();
        if (response.ok) {
          dispatch({ type: 'SET_WORKOUTS', payload: data });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchWorkouts();
}, [dispatch])
  return (
    <div className='home'>
        <div className='workouts'>
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>
        <WorkoutForm />

    </div>
  )
}

export default Home
