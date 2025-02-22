import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://newsapi.org/v2', // Replace with the actual news API base URL
    timeout: 10000, // Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to fetch news articles
export const fetchNewsArticles = async (endpoint: string, params: object) => {
    try {
        const response = await apiClient.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching news articles:', error);
        throw error;
    }
};

// Function to fetch a specific article by ID
export const fetchArticleById = async (id: string) => {
    try {
        const response = await apiClient.get(`/articles/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching article by ID:', error);
        throw error;
    }
};