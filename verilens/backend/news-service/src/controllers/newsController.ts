import { Request, Response } from 'express';
import { fetchNewsArticles } from '../services/apiClient';
import { summarizeArticle } from '../services/summarization';
import { detectBias } from '../services/biasDetection';

export class NewsController {
    public async getNewsFeed(req: Request, res: Response): Promise<void> {
        try {
            const articles = await fetchNewsArticles();
            const enrichedArticles = await Promise.all(articles.map(async (article) => {
                const summary = await summarizeArticle(article.content);
                const bias = await detectBias(article.content);
                return {
                    ...article,
                    summary,
                    bias,
                };
            }));
            res.status(200).json(enrichedArticles);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching news articles', error });
        }
    }

    public async getArticleById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const article = await fetchNewsArticles(id);
            if (!article) {
                res.status(404).json({ message: 'Article not found' });
                return;
            }
            const summary = await summarizeArticle(article.content);
            const bias = await detectBias(article.content);
            res.status(200).json({ ...article, summary, bias });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching article', error });
        }
    }
}