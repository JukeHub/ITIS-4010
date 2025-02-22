import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust the base URL as needed

// User Authentication
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return response.data;
};

export const getUserProfile = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// News Aggregation
export const fetchNews = async (topic) => {
    const response = await axios.get(`${API_BASE_URL}/news`, {
        params: { topic }
    });
    return response.data;
};

// Educational Modules
export const fetchEducationalContent = async () => {
    const response = await axios.get(`${API_BASE_URL}/education`);
    return response.data;
};

// Governance Features
export const proposeFeature = async (featureData, token) => {
    const response = await axios.post(`${API_BASE_URL}/governance/propose`, featureData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const voteOnFeature = async (featureId, token) => {
    const response = await axios.post(`${API_BASE_URL}/governance/vote`, { featureId }, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};