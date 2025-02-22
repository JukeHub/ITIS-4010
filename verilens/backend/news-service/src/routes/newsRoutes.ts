import { Router } from 'express';
import { NewsController } from '../controllers/newsController';

const router = Router();
const newsController = new NewsController();

// Route to fetch all news articles
router.get('/articles', newsController.getAllArticles);

// Route to fetch a specific article by ID
router.get('/articles/:id', newsController.getArticleById);

// Route to fetch articles by topic
router.get('/articles/topic/:topic', newsController.getArticlesByTopic);

// Route to fetch articles by source
router.get('/articles/source/:source', newsController.getArticlesBySource);

// Route to fetch summarized articles
router.get('/articles/summarized', newsController.getSummarizedArticles);

// Route to fetch articles with bias detection
router.get('/articles/bias', newsController.getArticlesWithBias);

export const newsRoutes = router;