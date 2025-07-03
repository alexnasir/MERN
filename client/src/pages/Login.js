import { useState } from "react";
const Login = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const json = await response.json();

        if (response.ok) {
            console.log('User logged in:', json);
            setEmail('');
            setPassword('');
        } else {
            console.error('Error logging in:', json);
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
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
            <button className="btn">Log In</button>
        </form>
    )
}

export default Login;