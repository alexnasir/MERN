import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signup, error, isLoading] = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();

        if (response.ok) {
            console.log('User signed up:', json);
            setEmail('');
            setPassword('');
        } else {
            console.error('Error signing up:', json);
        }
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>Email:</label>
        <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            required/>
        <label>Password:</label> 
        <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            required/>
            <button className="btn" disabled={isLoading}>Sign Up</button>
            { error && <div className="error">{error}</div> }
        </form>
    )
}

export default Signup;