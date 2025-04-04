import { fetchJSON } from '../utils/fetchHelper.js';

const BASE_URL = 'http://20.244.56.144/evaluation-service';

export const fetchTopUsers = async () => {
    const usersData = await fetchJSON(`${BASE_URL}/users`);
    const userIds = Object.keys(usersData.users);

    const userPostCounts = [];

    for (const userId of userIds) {
        const postsData = await fetchJSON(`${BASE_URL}/users/${userId}/posts`);
        userPostCounts.push({
            userId,
            name: usersData.users[userId],
            postCount: postsData.posts.length,
        });
    }

    userPostCounts.sort((a, b) => b.postCount - a.postCount);

    return userPostCounts.slice(0, 5);
};

export const fetchPopularPosts = async () => {
    const usersData = await fetchJSON(`${BASE_URL}/users`);
    const allPosts = [];

    for (const userId of Object.keys(usersData.users)) {
        const postsData = await fetchJSON(`${BASE_URL}/users/${userId}/posts`);
        allPosts.push(...postsData.posts);
    }

    const postCommentCounts = [];

    for (const post of allPosts) {
        const commentsData = await fetchJSON(`${BASE_URL}/posts/${post.id}/comments`);
        postCommentCounts.push({
            ...post,
            commentCount: commentsData.comments.length,
        });
    }

    const maxCommentCount = Math.max(...postCommentCounts.map(p => p.commentCount));

    return postCommentCounts.filter(p => p.commentCount === maxCommentCount);
};

export const fetchLatestPosts = async () => {
    const usersData = await fetchJSON(`${BASE_URL}/users`);
    const allPosts = [];

    for (const userId of Object.keys(usersData.users)) {
        const postsData = await fetchJSON(`${BASE_URL}/users/${userId}/posts`);
        allPosts.push(...postsData.posts);
    }

    // Sort by ID assuming higher ID = newer post (approximation)
    allPosts.sort((a, b) => b.id - a.id);

    return allPosts.slice(0, 5);
};
