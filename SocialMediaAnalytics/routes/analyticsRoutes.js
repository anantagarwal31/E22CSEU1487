import express from 'express';
import { getTopUsers, getPostsAnalytics } from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/users', getTopUsers);
router.get('/posts', getPostsAnalytics);

export default router;