// Importation des classes
import Notification from './class/Notification.js';
import Question from './class/Question.js';
import TextAnimation from './class/TextAnimation.js';
import QuizApi from './class/QuizApi.js';

// Instanciation de la classe QuizApi
const quizApi = new QuizApi();

// Fonction qui gère le changement de catégorie
export function handleCategoryChange() {
    // Animation du titre
    new TextAnimation(document.querySelector('h2')).animate();
    // Récupération des questions
    const selectedCategory = this.value;
    quizApi.fetchQuestions(selectedCategory, 10).then(questionsData => {
        // Suppression des questions précédentes
        document.getElementById('questionsContainer').innerHTML = '';
        // Affichage des questions
        questionsData.forEach(questionData => {
            // Instanciation de la classe Question qui prend en paramètre le texte de la question
            const question = new Question(questionData.question);
            // Ajout de la réponse et de l'explication
            question.setExplanation(questionData.explanation);
            for (const answer in questionData.answers) {
                if (questionData.answers[answer] !== null) {
                    question.addAnswers(
                        // Ajout de la réponse
                        questionData.answers[answer],
                        // Ajout d'un booléen pour savoir si la réponse est correcte
                        JSON.parse(questionData.correct_answers[`${answer}_correct`])
                    );
                }
            }
            // Affichage de la question et d'une selection de réponse (checkbox)
            question.show();
            // Ajout d'un écouteur d'événement sur le formulaire
            question.form.addEventListener('submit', e => handleSubmitQuestion(e, question));
    });
    });
}  


// Fonction qui gère la soumission d'une question
function handleSubmitQuestion(e, question) {
    // Empêche le rechargement de la page
    e.preventDefault();
    // Récupération des réponses
    const form = e.target;
    const inputs = form.querySelectorAll('input:checked');
    const answers = Array.from(inputs).map(input => input.value);
    const notification = new Notification(form.querySelector('.alert'));
    // Vérification des réponses
    if (!question.isValid(answers)) {
        // Si la réponse est incorrecte, on affiche un message d'erreur
        notification.sendFailure('Réponse incorrecte');
        return;
    }
    // Si la réponse est correcte, on affiche l'explication
    notification.sendSuccess('Réponse correcte' + question.getExplanation());
}