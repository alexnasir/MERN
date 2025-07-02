import { useContext } from "react";
import { Workoutcontext } from "../context/Workcontext";

export const useWorkoutContext = () => {
    const context = useContext(Workoutcontext);
    
    if (!context) {
        throw new Error('useWorkoutContext must be used within a WorkoutcontextProvider');
    }
    
    return context;
}

export default useWorkoutContext;