import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error('useWorkoutContext must be used within a WorkoutcontextProvider');
    }
    
    return context;
}

export default useAuthContext;