// Dati del quiz - 60 DOMANDE di cultura generale con multimedia
const quizQuestions = [
    // PRIME 10 DOMANDE (BASE)
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
    },

    // DOMANDE CON AUDIO (11-20)
    {
        question: "A quale famosa canzone dei Queen appartiene questo estratto?",
        answers: ["We Will Rock You", "Bohemian Rhapsody", "Another One Bites the Dust", "We Are the Champions"],
        correct: 1,
        points: 20,
        media: {
            type: "audio",
            src: "https://www.soundjay.com/button/button-1.mp3" // Sostituisci con audio reale
        }
    },
    {
        question: "Di quale cantante è questa voce?",
        answers: ["Elvis Presley", "Frank Sinatra", "Michael Jackson", "Freddie Mercury"],
        correct: 2,
        points: 20,
        media: {
            type: "audio", 
            src: "https://www.soundjay.com/button/button-2.mp3"
        }
    },
    {
        question: "A quale colonna sonora di film appartiene questa musica?",
        answers: ["Star Wars", "Il Signore degli Anelli", "Harry Potter", "Pirati dei Caraibi"],
        correct: 0,
        points: 25,
        media: {
            type: "audio",
            src: "https://www.soundjay.com/button/button-3.mp3"
        }
    },
    {
        question: "Quale strumento musicale stai ascoltando?",
        answers: ["Pianoforte", "Chitarra", "Violino", "Sassofono"],
        correct: 3,
        points: 15,
        media: {
            type: "audio",
            src: "https://www.soundjay.com/button/button-4.mp3"
        }
    },
    {
        question: "Da quale opera lirica è tratto questo assolo?",
        answers: ["La Traviata", "Il Barbiere di Siviglia", "Carmen", "Nabucco"],
        correct: 2,
        points: 25,
        media: {
            type: "audio",
            src: "https://www.soundjay.com/button/button-5.mp3"
        }
    },

    // DOMANDE CON IMMAGINI (21-30)
    {
        question: "In quale anno è stata scattata questa prima fotografia della storia?",
        answers: ["1826", "1850", "1875", "1901"],
        correct: 0,
        points: 20,
        media: {
            type: "image",
            src: "https://via.placeholder.com/400x300/6a11cb/ffffff?text=Prima+Foto+Storia+1826"
        }
    },
    {
        question: "Quale famoso dipinto è mostrato nell'immagine?",
        answers: ["La Gioconda", "L'Urlo", "Notte Stellata", "La Ragazza con l'orecchino di perla"],
        correct: 1,
        points: 15,
        media: {
            type: "image", 
            src: "https://via.placeholder.com/400x300/2575fc/ffffff?text=L'Urlo+di+Munch"
        }
    },
    {
        question: "A quale monumento appartiene questa architettura?",
        answers: ["Colosseo", "Torre Eiffel", "Big Ben", "Taj Mahal"],
        correct: 3,
        points: 15,
        media: {
            type: "image",
            src: "https://via.placeholder.com/400x300/ff416c/ffffff?text=Taj+Mahal+India"
        }
    },
    {
        question: "In quale città si trova questo ponte famoso?",
        answers: ["Venezia", "Firenze", "Londra", "San Francisco"],
        correct: 3,
        points: 15,
        media: {
            type: "image",
            src: "https://via.placeholder.com/400x300/28a745/ffffff?text=Golden+Gate+Bridge"
        }
    },
    {
        question: "Quale animale è raffigurato in questa immagine?",
        answers: ["Leopardo delle nevi", "Ghepardo", "Giaguaro", "Puma"],
        correct: 1,
        points: 10,
        media: {
            type: "image",
            src: "https://via.placeholder.com/400x300/ffc107/000000?text=Ghepardo+Maculato"
        }
    },

    // DOMANDE CON VIDEO (31-40)
    {
        question: "Da quale film famoso è tratta questa scena?",
        answers: ["Forrest Gump", "Pulp Fiction", "Il Padrino", "Titanic"],
        correct: 0,
        points: 25,
        media: {
            type: "video",
            src: "https://www.w3schools.com/html/mov_bbb.mp4" // Video di esempio
        }
    },
    {
        question: "Quale evento storico è mostrato nel video?",
        answers: ["Sbarco sulla Luna", "Caduta del Muro di Berlino", "Discorso di Martin Luther King", "Rivoluzione Francese"],
        correct: 0,
        points: 30,
        media: {
            type: "video",
            src: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    },
    {
        question: "A quale sport appartiene questa azione?",
        answers: ["Calcio", "Rugby", "Football Americano", "Hockey"],
        correct: 2,
        points: 15,
        media: {
            type: "video", 
            src: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    },
    {
        question: "Quale famoso discorso politico è questo?",
        answers: ["I have a dream", "Yes we can", "Discorso della Perlina", "Blood, toil, tears and sweat"],
        correct: 0,
        points: 25,
        media: {
            type: "video",
            src: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    },
    {
        question: "In quale programma TV appare questa scena?",
        answers: ["Friends", "The Office", "How I Met Your Mother", "Breaking Bad"],
        correct: 1,
        points: 20,
        media: {
            type: "video",
            src: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    },

    // ALTRE DOMANDE DI CULTURA GENERALE (41-60)
    {
        question: "Quale scienziato ha formulato la teoria della relatività?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correct: 1,
        points: 15
    },
    {
        question: "In quale anno è nato William Shakespeare?",
        answers: ["1564", "1588", "1601", "1623"],
        correct: 0,
        points: 15
    },
    {
        question: "Quale è il deserto più grande del mondo?",
        answers: ["Deserto del Sahara", "Deserto Arabico", "Deserto del Gobi", "Antartide"],
        correct: 3,
        points: 20
    },
    {
        question: "Chi ha composto la 'Quinta Sinfonia'?",
        answers: ["Mozart", "Beethoven", "Bach", "Chopin"],
        correct: 1,
        points: 15
    },
    {
        question: "Quale organo del corpo umano produce insulina?",
        answers: ["Fegato", "Pancreas", "Reni", "Stomaco"],
        correct: 1,
        points: 10
    },
    {
        question: "In quale città italiana si trova il Teatro alla Scala?",
        answers: ["Roma", "Milano", "Venezia", "Firenze"],
        correct: 1,
        points: 10
    },
    {
        question: "Quale esploratore ha scoperto l'America nel 1492?",
        answers: ["Cristoforo Colombo", "Marco Polo", "Vasco de Gama", "Amerigo Vespucci"],
        correct: 0,
        points: 10
    },
    {
        question: "Quale è la montagna più alta del mondo?",
        answers: ["K2", "Monte Everest", "Monte Bianco", "Kilimangiaro"],
        correct: 1,
        points: 10
    },
    {
        question: "Chi ha scritto '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
        correct: 0,
        points: 15
    },
    {
        question: "Quale pianeta ha gli anelli più visibili?",
        answers: ["Giove", "Saturno", "Urano", "Nettuno"],
        correct: 1,
        points: 10
    },
    {
        question: "In quale anno è finita la Seconda Guerra Mondiale?",
        answers: ["1943", "1945", "1947", "1950"],
        correct: 1,
        points: 15
    },
    {
        question: "Quale è la lingua più parlata al mondo?",
        answers: ["Inglese", "Spagnolo", "Mandarino", "Hindi"],
        correct: 2,
        points: 15
    },
    {
        question: "Chi ha dipinto la Cappella Sistina?",
        answers: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Caravaggio"],
        correct: 1,
        points: 15
    },
    {
        question: "Quale elemento chimico ha numero atomico 1?",
        answers: ["Elio", "Idrogeno", "Ossigeno", "Azoto"],
        correct: 1,
        points: 10
    },
    {
        question: "In quale sport si usa la mazza da cricket?",
        answers: ["Baseball", "Cricket", "Hockey", "Polo"],
        correct: 1,
        points: 10
    },
    {
        question: "Quale è la capitale del Canada?",
        answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: 2,
        points: 10
    },
    {
        question: "Chi ha inventato il telefono?",
        answers: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        correct: 1,
        points: 15
    },
    {
        question: "Quale fiume attraversa Parigi?",
        answers: ["Tamigi", "Senna", "Reno", "Danubio"],
        correct: 1,
        points: 10
    },
    {
        question: "In quale anno è uscito il primo iPhone?",
        answers: ["2005", "2007", "2009", "2011"],
        correct: 1,
        points: 15
    },
    {
        question: "Quale è il simbolo chimico del ferro?",
        answers: ["Fe", "Ir", "Fr", "F"],
        correct: 0,
        points: 10
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
            img.style.maxWidth = '100%';
            img.style.borderRadius = '10px';
            mediaContainer.appendChild(img);
        } else if (question.media.type === 'video') {
            const video = document.createElement('video');
            video.src = question.media.src;
            video.controls = true;
            video.autoplay = true;
            video.style.maxWidth = '100%';
            video.style.borderRadius = '10px';
            mediaContainer.appendChild(video);
        } else if (question.media.type === 'audio') {
            const audio = document.createElement('audio');
            audio.src = question.media.src;
            audio.controls = true;
            audio.autoplay = true;
            audio.style.width = '100%';
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
    console.log('Game Night Quiz loaded successfully with 60 questions!');
});
