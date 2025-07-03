import { useState } from "react";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const json = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                setError(json.error);
                throw new Error(json.error);
            }

            if (response.ok) {
                localStorage.setItem('user', JSON.stringify(json));
            }

            dispatchEvent({ type: 'LOGIN', payload: json });
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }
    };

    return { signup, error, isLoading };
};
