import React, { useState } from 'react';
import { registerUser } from '../api';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Register.css'; // Update the path to point to the styles folder

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const [success, setSuccess] = useState(''); // State for success messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error
        setSuccess(''); // Clear previous success message

        try {
            await registerUser({ email, password });
            setSuccess('Registration successful!'); // Set success message
            setEmail(''); // Clear the email field
            setPassword(''); // Clear the password field
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.'); // Set error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            {success && <p className="success-message">{success}</p>} {/* Display success message */}
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
            <button type="submit">Register</button>

            <div className="signin-option">
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </div>
        </form>
    );
};

export default Register;
