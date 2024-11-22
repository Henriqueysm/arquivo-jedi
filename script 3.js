// Objeto para armazenar pontuação dos personagens e sabres
const scoresPersonagem = {
    "Luke": 0,
    "Leia": 0,
    "Darth Vader": 0,
    "Rey": 0,
    "Yoda": 0
};

const scoresSabre = {
    "azul": 0,
    "verde": 0,
    "vermelho": 0,
    "amarelo": 0,
    "roxo": 0,
    "preto": 0,
    "laranja": 0,
    "branco": 0
};

// Mostrar ou ocultar cada quiz
function mostrarQuiz(quizId) {
    document.getElementById(quizId).classList.toggle("oculto");
}

// Seleciona resposta e atualiza pontuação para quiz de personagem
function selectAnswer(element, character) {
    const parent = element.parentNode;
    parent.querySelectorAll('.answer').forEach(answer => answer.classList.remove('selected'));
    element.classList.add('selected');
    scoresPersonagem[character]++;
}

// Seleciona resposta e atualiza pontuação para quiz de sabre
function selectAnswer2(element, color) {
    const parent = element.parentNode;
    parent.querySelectorAll('.answer').forEach(answer => answer.classList.remove('selected'));
    element.classList.add('selected');
    scoresSabre[color]++;
}

// Mostrar resultado do quiz (personagem ou sabre)
function showResult(type) {
    let scores = type === 'personagem' ? scoresPersonagem : scoresSabre;
    let resultElement = document.getElementById(type === 'personagem' ? "resultPersonagem" : "resultSabre");
    let maxScore = 0;
    let topChoice = "";

    for (const key in scores) {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            topChoice = key;
        }
    }

    resultElement.innerText = type === 'personagem' ? `Você seria: ${topChoice}!` : `Seu sabre ideal é : ${topChoice}!`;
}

// Resetar quiz e limpar respostas
function resetQuiz(type) {
    let scores = type === 'personagem' ? scoresPersonagem : scoresSabre;
    let resultElement = document.getElementById(type === 'personagem' ? "resultPersonagem" : "resultSabre");

    // Limpa respostas selecionadas
    document.querySelectorAll(`#quizSection${type.charAt(0).toUpperCase() + type.slice(1)} .answer`).forEach(answer => answer.classList.remove('selected'));

    // Limpa resultado exibido
    resultElement.innerText = "";

    // Reinicia pontuação
    for (const key in scores) {
        scores[key] = 0;
    }
}
