export const summarizeArticle = (content: string): string => {
    // Basic summarization logic: return the first two sentences as a summary
    const sentences = content.split('.').filter(sentence => sentence.trim() !== '');
    const summary = sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
    return summary;
};