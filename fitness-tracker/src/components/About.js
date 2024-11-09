import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css'; // Import the CSS file

const About = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/register');
    };

    return (
        <div className="about-page">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to FitTrack</h1>
                    <p>Your fitness journey starts here!</p>
                    <button 
                        onClick={handleGetStarted} 
                        className="get-started-button"
                    >
                        Get Started
                    </button>
                </div>
            </section>
            <section className="info-section">
                <h2>About FitTrack</h2>
                <p>
                    FitTrack is your ultimate fitness companion! 
                    We help you track your workouts, monitor your nutrition, 
                    and achieve your fitness goals through a user-friendly interface.
                </p>
                <div className="features">
                    <div className="feature-box">
                        <h3>Track Workouts</h3>
                        <p>Log and monitor your workout sessions for better performance.</p>
                    </div>
                    <div className="feature-box">
                        <h3>Nutrition Tracking</h3>
                        <p>Keep track of your meals and nutritional intake easily.</p>
                    </div>
                    <div className="feature-box">
                        <h3>Progress Monitoring</h3>
                        <p>View your progress over time and stay motivated.</p>
                    </div>
                    <div className="feature-box">
                        <h3>Community Support</h3>
                        <p>Join a community of fitness enthusiasts for support and motivation.</p>
                    </div>
                </div>
            </section>
            <section className="members-section">
                <h2>Meet Our Members</h2>
                <div className="member-details">
                    <div className="member">
                        <h3>John Doe</h3>
                        <p>Fitness Enthusiast</p>
                    </div>
                    <div className="member">
                        <h3>Jane Smith</h3>
                        <p>Yoga Instructor</p>
                    </div>
                    <div className="member">
                        <h3>Mike Johnson</h3>
                        <p>Nutritionist</p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 FitTrack. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;
