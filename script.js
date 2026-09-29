const confidenceQuestions = [
    "I can follow and make sense of the material being covered in lectures.",
    "I can respond to questions asked in lectures.",
    "I can produce my best work in examinations.",
    "I can engage in academic discussions with my classmates.",
    "I can draw up a study plan.",
    "I can make sense of the theoretical and conceptual aspects of my Information Systems subjects.",
    "I can ask my instructors for help if I do not understand.",
    "I can make sense of the feedback I receive regarding my tests and examinations.",
    "I can understand the theoretical concepts of my Information Systems subjects.",
    "I can apply Information Systems concepts when answering questions."
];


const performanceQuestions = [
    "I complete my academic tasks within the specified time.",
    "I complete my coursework according to my instructors' requirements.",
    "I complete my assignments on time.",
    "My learning results meet the expected academic goals.",
    "I follow the academic rules and requirements of my program.",
    "I maintain good quality in my academic work.",
    "I am considerate and respectful toward other students.",
    "I take the initiative to help other students with their academic work when I can.",
    "I interact positively with my classmates.",
    "I actively participate in group activities and projects."
];


function createQuestions(questions, containerId, scale) {

    const container = document.getElementById(containerId);

    questions.forEach(function(question, index) {

        const questionBox = document.createElement("div");

        questionBox.className = "question";

        let options = "";

        for (let number = 1; number <= scale; number++) {

            options += `
                <label class="rating">
                    <input
                        type="radio"
                        name="question${containerId}${index}"
                        value="${number}">
                    ${number}
                </label>
            `;
        }

        questionBox.innerHTML = `
            <p>
                <strong>${index + 1}.</strong>
                ${question}
            </p>

            <div class="rating-container">
                ${options}
            </div>
        `;

        container.appendChild(questionBox);
    });
}


createQuestions(
    confidenceQuestions,
    "confidenceQuestions",
    7
);


createQuestions(
    performanceQuestions,
    "performanceQuestions",
    5
);


function submitQuestionnaire() {

    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const year = document.querySelector('input[name="year"]:checked');
    const section = document.getElementById("section").value;

    if (!age || !gender || !year || !section) {
        alert("Please complete the Respondent Profile.");
        return;
    }

    alert("Thank you! Your questionnaire has been submitted.");
}