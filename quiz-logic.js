// Main Quiz Logic - Handles the core republic adjective questions

// Global variables
var currentQuestion = 0;
var score = 0;
var selectedAnswer = null;
var currentPhase = 'main'; // 'main', 'bonus', 'super'
var bonusScores = { capital: 0, language: 0, flag: 0 };
var superBonusScore = 0;
var bonusType = 'capital';

// Initialize the quiz
function init() {
    // Shuffle the quiz data for randomization
    quizData = shuffle(quizData);
    
    // Reset all variables
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    currentPhase = 'main';
    bonusScores = { capital: 0, language: 0, flag: 0 };
    superBonusScore = 0;
    
    // Update UI
    updateScore();
    updatePhaseIndicator();
    showQuestion();
}

// Show the current main quiz question
function showQuestion() {
    if (currentQuestion >= quizData.length) {
        showMainComplete();
        return;
    }

    var question = quizData[currentQuestion];
    
    // Update progress and counters
    updateProgress();
    updateQuestionCounter();
    
    // Create question text with blank
    var questionText = question.country.replace(question.correct, "___");
    document.getElementById('question').textContent = 'Fill in the blank: "' + questionText + '"';

    // Create shuffled options
    var shuffledOptions = shuffle(question.options);
    var optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';
    
    for (var i = 0; i < shuffledOptions.length; i++) {
        var option = document.createElement('div');
        option.className = 'option';
        option.textContent = shuffledOptions[i];
        option.onclick = (function(opt) {
            return function() { selectAnswer(opt); };
        })(shuffledOptions[i]);
        optionsEl.appendChild(option);
    }

    // Reset feedback and button
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('nextBtn').textContent = 'Next Question';
    selectedAnswer = null;
}

// Handle answer selection for main quiz
function selectAnswer(answer) {
    if (selectedAnswer !== null) return;

    selectedAnswer = answer;
    var question = quizData[currentQuestion];
    
    // Show results on options
    showOptionResults(selectedAnswer, question.correct);
    
    // Check if correct and update score
    var isCorrect = answer === question.correct;
    if (isCorrect) {
        score++;
        updateScore();
    }
    
    // Show feedback
    showFeedback(isCorrect, question.correct);
}

// Show main quiz completion screen
function showMainComplete() {
    var percentage = Math.round((score / quizData.length) * 100);
    var message = '';
    
    if (percentage >= 90) {
        message = 'Outstanding! You\'re a republic expert! 🏆';
    } else if (percentage >= 70) {
        message = 'Great job! You know your republics well! 🎉';
    } else if (percentage >= 50) {
        message = 'Not bad! Keep learning! 📚';
    } else {
        message = 'Keep practicing! 🌍';
    }

    document.getElementById('quiz-content').innerHTML = 
        '<div class="final-score">' +
        '<h2>Main Quiz Complete!</h2>' +
        '<div class="score-breakdown">' +
        '<p><strong>Republic Adjectives: ' + score + ' / ' + quizData.length + '</strong> (' + percentage + '%)</p>' +
        '</div>' +
        '<p>' + message + '</p>' +
        '<div class="bonus-section">' +
        '<h3>🎯 Ready for Bonus Rounds?</h3>' +
        '<p>Test your knowledge of capitals, languages, flags, and special trivia questions!</p>' +
        '<p><strong>Bonus Rounds Available:</strong></p>' +
        '<p>🏛️ <strong>Capitals:</strong> 23 points<br>' +
        '🗣️ <strong>Languages:</strong> 23 points<br>' +
        '🚩 <strong>Flags:</strong> 23 points<br>' +
        '🌟 <strong>Super Bonus:</strong> 7 trivia questions<br>' +
        '<strong>Total Possible:</strong> 100 points!</p>' +
        '<button class="btn btn-primary" onclick="startBonusRounds()">Start Bonus Rounds</button>' +
        '<button class="btn btn-secondary" onclick="showFinalScore()">Finish Quiz</button>' +
        '</div>' +
        '</div>';

    document.getElementById('progressBar').style.width = '100%';
}

// Handle the main navigation
function handleNext() {
    if (currentPhase === 'main') {
        currentQuestion++;
        showQuestion();
    } else if (currentPhase === 'bonus') {
        currentQuestion++;
        showBonusQuestion();
    } else if (currentPhase === 'super') {
        currentQuestion++;
        showSuperBonusQuestion();
    }
}


// Hidden test function - skip to bonus rounds
function skipToBonus() {
    // Set fake perfect score for testing
    score = 23;
    currentQuestion = 23;
    
    // Update the score display
    updateScore();
    
    // Show the main completion screen
    showMainComplete();
}
