import React, { useState } from 'react';
import { loginUser } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // State to handle errors
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password }); // Log email and password here
    
        try {
            const response = await loginUser({ email, password });
            console.log("Response from loginUser:", response); // Log response to check data
            if (response && response.token) {
                localStorage.setItem('token', response.token);
                navigate('/dashboard');
            } else {
                setErrorMessage('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Login failed. Please check your credentials.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {errorMessage && <p className="error">{errorMessage}</p>} {/* Display error message */}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>

            <div className="signin-option">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </form>
    );
};

export default Login;
