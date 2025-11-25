// Dati del quiz - domande di cultura generale
const quizQuestions = [
    {
        question: "Qual è la capitale dell'Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: 2,
        points: 10
    },
    {
        question: "In quale anno è caduto il muro di Berlino?",
        answers: ["1987", "1989", "1991", "1985"],
        correct: 1,
        points: 15
    },
    {
        question: "Chi ha scritto 'Il nome della rosa'?",
        answers: ["Italo Calvino", "Umberto Eco", "Luigi Pirandello", "Alessandro Manzoni"],
        correct: 1,
        points: 10
    },
    {
        question: "Qual è l'elemento chimico con simbolo 'Au'?",
        answers: ["Argento", "Alluminio", "Oro", "Argon"],
        correct: 2,
        points: 10
    },
    {
        question: "In quale oceano si trova le Bermuda?",
        answers: ["Oceano Indiano", "Oceano Pacifico", "Oceano Atlantico", "Oceano Artico"],
        correct: 2,
        points: 10
    },
    {
        question: "Chi ha dipinto 'La notte stellata'?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
        correct: 1,
        points: 15
    },
    {
        question: "Qual è il fiume più lungo d'Italia?",
        answers: ["Tevere", "Adige", "Arno", "Po"],
        correct: 3,
        points: 10
    },
    {
        question: "In quale anno è stato inventato il World Wide Web?",
        answers: ["1985", "1989", "1991", "1993"],
        correct: 2,
        points: 15
    },
    {
        question: "Quale pianeta è noto come il 'Pianeta Rosso'?",
        answers: ["Venere", "Marte", "Giove", "Saturno"],
        correct: 1,
        points: 10
    },
    {
        question: "Chi ha scritto 'Cent'anni di solitudine'?",
        answers: ["Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda", "Isabel Allende"],
        correct: 0,
        points: 15
    }
];

// Stato del gioco
let gameState = {
    currentPlayer: null,
    players: [],
    currentQuestionIndex: 0,
    score: 0,
    timer: null,
    timeLeft: 30,
    answered: false
};

// Elementi DOM
const loginScreen = document.getElementById('loginScreen');
const gameScreen = document.getElementById('gameScreen');
const resultsScreen = document.getElementById('resultsScreen');
const loginForm = document.getElementById('loginForm');
const playerNameInput = document.getElementById('playerName');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const mediaContainer = document.getElementById('mediaContainer');
const answersContainer = document.getElementById('answersContainer');
const timerElement = document.getElementById('timer');
const nextBtn = document.getElementById('nextBtn');
const playerList = document.getElementById('playerList');
const finalScore = document.getElementById('scoreValue');
const positionValue = document.getElementById('positionValue');
const playAgainBtn = document.getElementById('playAgainBtn');

// Gestione del login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = playerNameInput.value.trim();
    
    if (playerName) {
        gameState.currentPlayer = {
            id: Date.now().toString(),
            name: playerName,
            score: 0
        };
        
        // Aggiungi il giocatore alla lista
        gameState.players.push({...gameState.currentPlayer});
        
        // Nascondi login e mostra gioco
        loginScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        
        // Aggiorna classifica
        updateLeaderboard();
        
        // Carica la prima domanda
        loadQuestion();
    }
});

// Carica una domanda
function loadQuestion() {
    // Reset stato
    gameState.answered = false;
    gameState.timeLeft = 30;
    timerElement.textContent = `${gameState.timeLeft}s`;
    nextBtn.disabled = true;
    
    // Ottieni domanda corrente
    const question = quizQuestions[gameState.currentQuestionIndex];
    
    // Aggiorna contatore
    questionCounter.textContent = `Domanda ${gameState.currentQuestionIndex + 1} di ${quizQuestions.length}`;
    
    // Aggiorna testo domanda
    questionText.textContent = question.question;
    
    // Pulisci container media
    mediaContainer.innerHTML = '';
    
    // Aggiungi media se presente
    if (question.media) {
        if (question.media.type === 'image') {
            const img = document.createElement('img');
            img.src = question.media.src;
            img.alt = 'Immagine domanda';
            mediaContainer.appendChild(img);
        } else if (question.media.type === 'video') {
            const video = document.createElement('video');
            video.src = question.media.src;
            video.controls = true;
            video.autoplay = true;
            mediaContainer.appendChild(video);
        } else if (question.media.type === 'audio') {
            const audio = document.createElement('audio');
            audio.src = question.media.src;
            audio.controls = true;
            audio.autoplay = true;
            mediaContainer.appendChild(audio);
        }
    }
    
    // Pulisci e ricrea risposte
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
    
    // Avvia timer
    startTimer();
}

// Gestione selezione risposta
function selectAnswer(selectedIndex) {
    if (gameState.answered) return;
    
    gameState.answered = true;
    clearInterval(gameState.timer);
    
    const question = quizQuestions[gameState.currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    // Disabilita tutti i pulsanti
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    
    // Evidenzia risposta corretta e quella selezionata
    answerButtons[question.correct].classList.add('correct');
    
    if (selectedIndex !== question.correct) {
        answerButtons[selectedIndex].classList.add('incorrect');
    } else {
        // Risposta corretta - aggiungi punti
        gameState.score += question.points;
        
        // Aggiorna punteggio giocatore corrente
        const playerIndex = gameState.players.findIndex(p => p.id === gameState.currentPlayer.id);
        if (playerIndex !== -1) {
            gameState.players[playerIndex].score = gameState.score;
        }
        
        // Aggiorna classifica
        updateLeaderboard();
    }
    
    // Abilita pulsante prossima domanda
    nextBtn.disabled = false;
}

// Timer per ogni domanda
function startTimer() {
    clearInterval(gameState.timer);
    
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        timerElement.textContent = `${gameState.timeLeft}s`;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            if (!gameState.answered) {
                // Tempo scaduto, disabilita risposte
                gameState.answered = true;
                const answerButtons = document.querySelectorAll('.answer-btn');
                answerButtons.forEach(button => {
                    button.disabled = true;
                });
                
                // Evidenzia risposta corretta
                const question = quizQuestions[gameState.currentQuestionIndex];
                answerButtons[question.correct].classList.add('correct');
                
                // Abilita pulsante prossima domanda
                nextBtn.disabled = false;
            }
        }
    }, 1000);
}

// Gestione prossima domanda
nextBtn.addEventListener('click', () => {
    gameState.currentQuestionIndex++;
    
    if (gameState.currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        // Quiz completato
        gameScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        
        // Mostra punteggio finale
        finalScore.textContent = gameState.score;
        
        // Calcola posizione in classifica
        const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score);
        const position = sortedPlayers.findIndex(p => p.id === gameState.currentPlayer.id) + 1;
        positionValue.textContent = position;
    }
});

// Aggiorna classifica
function updateLeaderboard() {
    // Ordina giocatori per punteggio (decrescente)
    const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score);
    
    // Pulisci lista
    playerList.innerHTML = '';
    
    // Aggiungi giocatori alla classifica
    sortedPlayers.forEach((player, index) => {
        const li = document.createElement('li');
        li.className = `player-item ${player.id === gameState.currentPlayer.id ? 'current' : ''}`;
        
        li.innerHTML = `
            <div>
                <span class="player-name">${index + 1}. ${player.name}</span>
            </div>
            <div class="player-score">${player.score}</div>
        `;
        
        playerList.appendChild(li);
    });
}

// Gioca di nuovo
playAgainBtn.addEventListener('click', () => {
    // Reset stato del gioco
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    
    // Aggiorna punteggio giocatore corrente
    const playerIndex = gameState.players.findIndex(p => p.id === gameState.currentPlayer.id);
    if (playerIndex !== -1) {
        gameState.players[playerIndex].score = 0;
    }
    
    // Torna alla schermata di gioco
    resultsScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    
    // Aggiorna classifica
    updateLeaderboard();
    
    // Ricomincia il quiz
    loadQuestion();
});

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    console.log('Game Night Quiz loaded successfully!');
});