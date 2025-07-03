import useAuthContext from "./useAuthContext";

export const useLogout = () => {

    const { dispatch} = useAuthContext();
 
    const logout = () => {
        // Clear user data from local storage or cookies
        localStorage.removeItem('user');
        
        // Optionally, you can also clear any other related data
        // For example, if you have a token stored in local storage:
        localStorage.removeItem('token');

        // If you're using a context or state management, you can dispatch a logout action
        // dispatch({ type: 'LOGOUT' });
        dispatch({ type: 'LOGOUT' });
    };

    return { logout };
}