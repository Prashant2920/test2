import axios from 'axios';

const API_URL = 'http://localhost:5000/api/'; // Backend URL

export const registerUser = (userData) => {
    return axios.post(`${API_URL}register`, userData);
};

export const loginUser = (userData) => {
    return axios.post(`${API_URL}login`, userData);
};

export const addActivity = (activityData, token) => {
    return axios.post(`${API_URL}activities`, activityData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
