// Bonus Rounds Logic - Handles capitals, languages, flags, and super bonus questions

// Start bonus rounds
function startBonusRounds() {
    currentPhase = 'bonus';
    currentQuestion = 0;
    bonusType = 'capital';
    
    // Completely restore the quiz interface
    document.getElementById('quiz-content').innerHTML = 
        '<div class="question-container">' +
        '<div class="question" id="question"></div>' +
        '<div class="options" id="options"></div>' +
        '<div id="feedback" class="feedback"></div>' +
        '<button id="nextBtn" class="btn btn-primary" onclick="handleNext()" disabled>Next Question</button>' +
        '<div class="creator-credit">Created by Claude • Prompted by Da<a href="#" onclick="skipAllBonus(); return false;" style="color: inherit; text-decoration: none;">v</a>id • Inspired by Matt</div>' +
        '</div>';
    
    // Make sure phase indicator is visible
    document.getElementById('phaseIndicator').style.display = 'block';
    
    updateScore();
    updatePhaseIndicator();
    showBonusQuestion();
}

// Show bonus question (capitals, languages, flags)
function showBonusQuestion() {
    if (currentQuestion >= quizData.length) {
        // Move to next bonus type or super bonus
        if (bonusType === 'capital') {
            bonusType = 'language';
            currentQuestion = 0;
            updatePhaseIndicator();
            showBonusQuestion();
            return;
        } else if (bonusType === 'language') {
            bonusType = 'flag';
            currentQuestion = 0;
            updatePhaseIndicator();
            showBonusQuestion();
            return;
        } else {
            // All bonus rounds complete, start super bonus
            startSuperBonus();
            return;
        }
    }

    var question = quizData[currentQuestion];
    
    // Update progress and counters
    updateProgress();
    updateQuestionCounter();

    // Get country name for question
    var countryName = question.country.indexOf(' of ') > -1 ? 
        question.country.split(' of ')[1] : 
        question.country.split(' ').pop();

    var questionText = '';
    var options = [];
    var correct = '';

    // Set question based on bonus type
    if (bonusType === 'capital') {
        questionText = 'What is the capital of ' + countryName + '?';
        options = question.capitalOptions;
        correct = question.capital;
    } else if (bonusType === 'language') {
        questionText = 'What is the main language spoken in ' + countryName + '?';
        options = question.languageOptions;
        correct = question.language;
    } else if (bonusType === 'flag') {
        questionText = 'Which flag belongs to ' + countryName + '?';
        options = question.flagOptions;
        correct = question.flag;
    }

    document.getElementById('question').textContent = questionText;

    // Create shuffled options
    var shuffledOptions = shuffle(options);
    var optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';

    if (bonusType === 'flag') {
        // Flag grid layout
        optionsEl.className = 'flag-grid';
        
        for (var i = 0; i < shuffledOptions.length; i++) {
            var option = document.createElement('div');
            option.className = 'flag-option';
            option.setAttribute('data-flag', shuffledOptions[i]); // Add data attribute
            
            var flagImg = document.createElement('img');
            flagImg.src = 'https://flagcdn.com/w160/' + shuffledOptions[i] + '.png';
            flagImg.className = 'flag-image';
            flagImg.alt = 'Flag option';
            
            option.appendChild(flagImg);
            
            option.onclick = (function(opt, corr) {
                return function() { selectBonusAnswer(opt, corr); };
            })(shuffledOptions[i], correct);
            
            optionsEl.appendChild(option);
        }
    } else {
        // Regular options for capitals and languages
        optionsEl.className = 'options';
        
        for (var i = 0; i < shuffledOptions.length; i++) {
            var option = document.createElement('div');
            option.className = 'option';
            option.textContent = shuffledOptions[i];
            option.onclick = (function(opt, corr) {
                return function() { selectBonusAnswer(opt, corr); };
            })(shuffledOptions[i], correct);
            optionsEl.appendChild(option);
        }
    }

    // Reset feedback and button
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('nextBtn').textContent = 'Next Question';
    selectedAnswer = null;
}

// Handle bonus answer selection
function selectBonusAnswer(answer, correct) {
    if (selectedAnswer !== null) return;

    selectedAnswer = answer;
    
    // Show results on options
    showOptionResults(selectedAnswer, correct);

    // Check if correct and update score
    var isCorrect = answer === correct;
    if (isCorrect) {
        bonusScores[bonusType]++;
        updateScore();
    }

    // Show feedback
    showFeedback(isCorrect, correct);
}

// Start super bonus round
function startSuperBonus() {
    currentPhase = 'super';
    currentQuestion = 0;
    updateScore();
    updatePhaseIndicator();
    showSuperBonusQuestion();
}

// Show super bonus question
function showSuperBonusQuestion() {
    if (currentQuestion >= superBonusQuestions.length) {
        showFinalScore();
        return;
    }

    var question = superBonusQuestions[currentQuestion];
    
    // Update progress and counters
    updateProgress();
    updateQuestionCounter();

    document.getElementById('question').textContent = question.question;

    // Create shuffled options - always regular options for super bonus
    var shuffledOptions = shuffle(question.options);
    var optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';
    optionsEl.className = 'options';
    
    for (var i = 0; i < shuffledOptions.length; i++) {
        var option = document.createElement('div');
        option.className = 'option';
        option.textContent = shuffledOptions[i];
        option.onclick = (function(opt, corr, exp) {
            return function() { selectSuperAnswer(opt, corr, exp); };
        })(shuffledOptions[i], question.correct, question.explanation);
        optionsEl.appendChild(option);
    }

    // Reset feedback and button
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('nextBtn').textContent = currentQuestion === superBonusQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';
    selectedAnswer = null;
}

// Handle super bonus answer selection
function selectSuperAnswer(answer, correct, explanation) {
    if (selectedAnswer !== null) return;

    selectedAnswer = answer;
    
    // Show results on options
    showOptionResults(selectedAnswer, correct);

    // Check if correct and update score
    var isCorrect = answer === correct;
    if (isCorrect) {
        superBonusScore++;
        updateScore();
    }

    // Show feedback with explanation
    showFeedback(isCorrect, correct, explanation);
}

// Show final score screen with leaderboard option
function showFinalScore() {
    var mainPercentage = Math.round((score / quizData.length) * 100);
    var totalPoints = score + bonusScores.capital + bonusScores.language + bonusScores.flag + superBonusScore;
    var overallPercentage = Math.round((totalPoints / 100) * 100);
    
    var message = '';
    if (overallPercentage >= 90) {
        message = 'LEGENDARY! You\'re a world geography master! 🏆👑';
    } else if (overallPercentage >= 80) {
        message = 'Outstanding! Incredible knowledge! 🌟';
    } else if (overallPercentage >= 70) {
        message = 'Excellent work! Well done! 🎉';
    } else if (overallPercentage >= 60) {
        message = 'Good job! Keep learning! 📚';
    } else {
        message = 'Keep practicing! Geography is fascinating! 🌍';
    }

    // Calculate performance insights
    var categories = [
        { name: '📚 Republic Adjectives', score: score, total: 23 },
        { name: '🏛️ Capital Cities', score: bonusScores.capital, total: 23 },
        { name: '🗣️ Languages', score: bonusScores.language, total: 23 },
        { name: '🚩 Flags', score: bonusScores.flag, total: 23 },
        { name: '🌟 Super Bonus', score: superBonusScore, total: 7 }
    ];

    // Filter out categories with 0 score (not attempted)
    var attemptedCategories = categories.filter(function(cat) {
        return cat.score > 0 || (cat.name === '📚 Republic Adjectives');
    });

    var bestCategory = attemptedCategories.reduce(function(best, current) {
        var currentPercent = (current.score / current.total) * 100;
        var bestPercent = (best.score / best.total) * 100;
        return currentPercent > bestPercent ? current : best;
    });

    var worstCategory = attemptedCategories.reduce(function(worst, current) {
        var currentPercent = (current.score / current.total) * 100;
        var worstPercent = (worst.score / worst.total) * 100;
        return currentPercent < worstPercent ? current : worst;
    });

    var insightsHtml = '';
    if (attemptedCategories.length > 1) {
        insightsHtml = '<div class="performance-insights">' +
            '<h4>📊 Performance Insights</h4>';
        
        attemptedCategories.forEach(function(cat) {
            var percentage = Math.round((cat.score / cat.total) * 100);
            var className = '';
            if (cat === bestCategory) className = 'insight-best';
            if (cat === worstCategory && attemptedCategories.length > 1) className = 'insight-needs-work';
            
            insightsHtml += '<div class="insight-item">' +
                '<span class="insight-label">' + cat.name + '</span>' +
                '<span class="insight-score ' + className + '">' + cat.score + '/' + cat.total + ' (' + percentage + '%)</span>' +
                '</div>';
        });
        
        insightsHtml += '</div>';
    }

    document.getElementById('quiz-content').innerHTML = 
        '<div class="final-score">' +
        '<h2>🎊 Quiz Complete!</h2>' +
        '<div class="score-breakdown">' +
        '<h3>📊 Your Results</h3>' +
        '<p>📚 <strong>Republic Adjectives:</strong> ' + score + ' / 23</p>' +
        '<p>🏛️ <strong>Capital Cities:</strong> ' + bonusScores.capital + ' / 23</p>' +
        '<p>🗣️ <strong>Languages:</strong> ' + bonusScores.language + ' / 23</p>' +
        '<p>🚩 <strong>Flags:</strong> ' + bonusScores.flag + ' / 23</p>' +
        '<p>🌟 <strong>Super Bonus:</strong> ' + superBonusScore + ' / 7</p>' +
        '<hr style="margin: 20px 0; border: 1px solid #e2e8f0;">' +
        '<p style="font-size: 1.8em; font-weight: bold; color: #2d3748;">🏆 <strong>Total Score: ' + totalPoints + ' / 100</strong> (' + overallPercentage + '%)</p>' +
        '</div>' +
        insightsHtml +
        '<p style="font-size: 1.4em; margin: 24px 0;">' + message + '</p>' +
        '<button class="btn btn-secondary" onclick="init()">Take Quiz Again</button>' +
        '<button class="btn share-button" onclick="shareResults()">Copy Results</button>' +
        '<div class="creator-credit">Created by Claude • Prompted by Da<a href="#" onclick="skipAllBonus(); return false;" style="color: inherit; text-decoration: none;">v</a>id • Inspired by Matt</div>' +
        '</div>';

    document.getElementById('progressBar').style.width = '100%';
    document.getElementById('phaseIndicator').style.display = 'none';
}
