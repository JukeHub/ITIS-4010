export function detectBias(articleContent: string): string {
    // Simple keyword-based bias detection logic
    const leftKeywords = ['inequality', 'social justice', 'progressive', 'reform'];
    const rightKeywords = ['freedom', 'liberty', 'conservative', 'traditional'];

    let leftCount = 0;
    let rightCount = 0;

    const words = articleContent.toLowerCase().split(/\W+/);

    words.forEach(word => {
        if (leftKeywords.includes(word)) {
            leftCount++;
        } else if (rightKeywords.includes(word)) {
            rightCount++;
        }
    });

    if (leftCount > rightCount) {
        return 'Left';
    } else if (rightCount > leftCount) {
        return 'Right';
    } else {
        return 'Neutral';
    }
}