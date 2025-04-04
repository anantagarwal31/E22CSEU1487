import { fetchTopUsers, fetchPopularPosts, fetchLatestPosts } from '../services/socialMediaService.js';

export const getTopUsers = async (req, res) => {
    try {
        const topUsers = await fetchTopUsers();
        res.json({ topUsers });
    } catch (error) {
        console.error('Error in getTopUsers:', error.message);
        res.status(500).json({ message: 'Error fetching user data' });
    }
};

export const getPostsAnalytics = async (req, res) => {
    try {
    const { type } = req.query;
    if (type === 'popular') {
        const posts = await fetchPopularPosts();
        res.json({ posts });
    } else if (type === 'latest') {
        const posts = await fetchLatestPosts();
        res.json({ posts });
    } else {
        res.status(400).json({ message: 'Invalid query parameter. Use ?type=popular or ?type=latest' });
    }
    } catch (error) {
    console.error('Error in getPostsAnalytics:', error.message);
    res.status(500).json({ message: 'Error fetching posts' });
    }
};
