import axios from 'axios';

const API_URL = 'http://localhost:5000/api/'; // Backend URL

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error in registerUser:', error.response?.data || error.message);
        throw error;
    }
};

// Login user and return token if successful
export const loginUser = async (userData) => {
    console.log("user data:", userData); // Log user data for debugging
    try {
        const response = await axios.post(`${API_URL}login`, userData);
        console.log("Response from loginUser:", response.data); // Log the response data
        return response.data; // Expecting response to contain token
    } catch (error) {
        console.error('Error in loginUser:', error.response?.data || error.message);
        throw error;
    }
};

// Add an activity with token authorization
export const addActivity = async (activityData, token) => {
    try {
        const response = await axios.post(`${API_URL}activities`, activityData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error in addActivity:', error.response?.data || error.message);
        throw error;
    }
};
