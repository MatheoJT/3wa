class QuizApi {

    constructor() {
        this.apiKey = 'Q6n2JBVv4Dzb8Ues0pnEKYGOBzm5JprYErcCafKC';
        this.apiUrl = 'https://quizapi.io/api/v1/questions';
    }
    
    // Récupère les questions avec une limite et une catégorie
    async fetchQuestions(category, limit) {
        const response = await fetch(`${this.apiUrl}?apiKey=${this.apiKey}&limit=${limit}&category=${category}`);
        if (!response.ok) {
            throw new Error('Impossible de récupérer les questions de la catégorie ' + category);
        }
        return await response.json();
    }
}

export default QuizApi;