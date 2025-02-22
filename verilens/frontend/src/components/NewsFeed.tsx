import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('/api/news'); // Adjust the endpoint as necessary
                setArticles(response.data);
            } catch (err) {
                setError('Failed to fetch articles');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>News Feed</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                        <p>Bias: {article.bias}</p>
                        <p>Source: {article.source}</p>
                        <p>Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsFeed;