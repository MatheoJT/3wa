class Question {
    constructor(question) {
        this.question = question;
        this.answers = {};
        this.form = null;
        this.explanation = '';
    }

    // ajoute une explication à la question
    setExplanation(explanation) {
        if (explanation !== null) this.explanation = ` : ${explanation}`;
    }

    getExplanation() {
        return this.explanation;
    }

    // ajoute une réponse à la question avec un booléen pour savoir si la réponse est correcte
    addAnswers(answer, isCorrect) {
        this.answers[answer] = isCorrect;
    }
    
    // vérifie si les réponses sont correctes
    isValid(answers) {
        // recupere le nombre de reponses correctes
        let correctAnswerCount = 0;
        for (let answer in this.answers) {
            if (this.answers[answer] === true) {
                correctAnswerCount++;
            }
        }
        // si le nombre de reponses est different du nombre de reponses correctes alors la reponse est fausse
        if (answers.length !== correctAnswerCount) {
            return false;
        }
        // si une des reponses est fausse alors la reponse est fausse
        for (let answer of answers) {
            if (answer !== "true") {
                return false;
            }
        }
        // sinon la reponse est correcte
        return true;
      }

    // affiche la question et une selection de reponse (checkbox)
    show() {
        let answersHTML = "";
        for (let answer in this.answers) {
            answersHTML += `
                <div>
                    <input type="checkbox" id="${answer}" value="${this.answers[answer]}" name="answer">
                    <label for="${answer}">${answer}</label>
                </div>
            `
        }
        this.form = $(`
            <form class="question-card">
                <p><strong>${this.question}</strong></p>
                <div class="answers">
                    ${answersHTML}
                </div>
                <button type="submit" class="submit-button">Submit</button>
                <div class="alert"></div>
            </form>
        `)[0];

        $('#questionsContainer').append(this.form);
    }
}

export default Question;
