export const formatContent = (content: string): string => {
    return content.trim().replace(/\s+/g, ' ');
};

export const validateContent = (content: string): boolean => {
    return content.length > 0 && content.length <= 5000; // Example validation
};

export const parseQuizData = (quizData: any): { question: string; options: string[]; answer: string }[] => {
    return quizData.map((item: any) => ({
        question: item.question,
        options: item.options,
        answer: item.answer
    }));
};