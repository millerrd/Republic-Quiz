// UI Utilities and Helper Functions

// Shuffle array function
function shuffle(array) {
    var newArray = array.slice();
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}

// Update score display
function updateScore() {
    if (currentPhase === 'main') {
        document.getElementById('score').textContent = score;
        document.getElementById('total').textContent = quizData.length;
    } else {
        var totalBonus = bonusScores.capital + bonusScores.language + bonusScores.flag + superBonusScore;
        var totalPossible = score + totalBonus;
        document.getElementById('score').textContent = totalPossible;
        document.getElementById('total').textContent = '100';
    }
}

// Update progress bar
function updateProgress() {
    var progress;
    if (currentPhase === 'main') {
        progress = (currentQuestion / quizData.length) * 100;
    } else if (currentPhase === 'bonus') {
        progress = (currentQuestion / quizData.length) * 100;
    } else if (currentPhase === 'super') {
        progress = (currentQuestion / superBonusQuestions.length) * 100;
    }
    document.getElementById('progressBar').style.width = progress + '%';
}

// Update question counter
function updateQuestionCounter() {
    var counterText;
    if (currentPhase === 'main') {
        counterText = 'Question ' + (currentQuestion + 1) + ' of ' + quizData.length;
    } else if (currentPhase === 'bonus') {
        counterText = 'Question ' + (currentQuestion + 1) + ' of ' + quizData.length;
    } else if (currentPhase === 'super') {
        counterText = 'Super Bonus ' + (currentQuestion + 1) + ' of ' + superBonusQuestions.length;
    }
    document.getElementById('questionCounter').textContent = counterText;
}

// Update phase indicator
function updatePhaseIndicator() {
    var indicator = document.getElementById('phaseIndicator');
    
    if (currentPhase === 'main') {
        indicator.textContent = '📚 Main Quiz: Republic Adjectives';
        indicator.className = 'phase-indicator phase-main';
        indicator.style.display = 'block';
    } else if (currentPhase === 'bonus') {
        var phaseText = '';
        if (bonusType === 'capital') {
            phaseText = '🏛️ Bonus Round: Capital Cities';
        } else if (bonusType === 'language') {
            phaseText = '🗣️ Bonus Round: Languages';
        } else if (bonusType === 'flag') {
            phaseText = '🚩 Bonus Round: Flags';
        }
        indicator.textContent = phaseText;
        indicator.className = 'phase-indicator phase-bonus';
        indicator.style.display = 'block';
    } else if (currentPhase === 'super') {
        indicator.textContent = '🌟 Super Bonus: Republic Trivia';
        indicator.className = 'phase-indicator phase-super';
        indicator.style.display = 'block';
    }
}

// Show feedback
function showFeedback(isCorrect, correctAnswer, explanation) {
    var feedback = document.getElementById('feedback');
    var nextBtn = document.getElementById('nextBtn');
    
    if (isCorrect) {
        if (currentPhase === 'main') {
            feedback.textContent = '✅ Correct! The answer is "' + correctAnswer + '".';
            feedback.className = 'feedback correct';
        } else if (currentPhase === 'bonus') {
            feedback.textContent = '🎉 Bonus point earned! ' + correctAnswer + ' is correct!';
            feedback.className = 'feedback bonus-correct';
        } else if (currentPhase === 'super') {
            feedback.textContent = '🌟 Correct! ' + explanation;
            feedback.className = 'feedback bonus-correct';
        }
    } else {
        if (currentPhase === 'super') {
            feedback.textContent = '❌ Incorrect. ' + explanation;
        } else {
            feedback.textContent = '❌ Incorrect. The correct answer is "' + correctAnswer + '".';
        }
        feedback.className = 'feedback incorrect';
    }
    
    feedback.style.display = 'block';
    nextBtn.disabled = false;
}

// Show option results
function showOptionResults(selectedAnswer, correctAnswer) {
    var options = document.querySelectorAll('#options .option');
    
    for (var i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
        if (options[i].textContent === selectedAnswer) {
            options[i].classList.add('selected');
        }
        if (options[i].textContent === correctAnswer) {
            options[i].classList.add('correct');
        }
        if (options[i].textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            options[i].classList.add('incorrect');
        }
    }
}

// Share results functionality
function shareResults() {
    var totalPoints = score + bonusScores.capital + bonusScores.language + bonusScores.flag + superBonusScore;
    var overallPercentage = Math.round((totalPoints / 100) * 100);
    
    var shareText = '🏛️ Republic Quiz Results 🏛️\n\n' +
        '📚 Republic Adjectives: ' + score + '/23\n' +
        '🏛️ Capital Cities: ' + bonusScores.capital + '/23\n' +
        '🗣️ Languages: ' + bonusScores.language + '/23\n' +
        '🚩 Flags: ' + bonusScores.flag + '/23\n' +
        '🌟 Super Bonus: ' + superBonusScore + '/7\n\n' +
        '🏆 Total Score: ' + totalPoints + '/100 (' + overallPercentage + '%)\n\n' +
        'Test your republic knowledge too! 🌍';

    if (navigator.share) {
        navigator.share({
            title: 'Republic Quiz Results',
            text: shareText
        }).catch(function(err) {
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showShareFeedback('Results copied to clipboard! 📋');
        }).catch(function() {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showShareFeedback('Results copied to clipboard! 📋');
    } catch (err) {
        showShareFeedback('Could not copy results. Please select and copy manually.');
    }
    
    document.body.removeChild(textArea);
}

function showShareFeedback(message) {
    var feedback = document.createElement('div');
    feedback.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #48bb78; color: white; padding: 12px 20px; border-radius: 8px; z-index: 1000; font-weight: 600;';
    feedback.textContent = message;
    document.body.appendChild(feedback);
    
    setTimeout(function() {
        document.body.removeChild(feedback);
    }, 3000);
}

// Show/hide leaderboard
function showLeaderboard() {
    document.getElementById('leaderboard-section').style.display = 'block';
    loadLeaderboard();
}

function hideLeaderboard() {
    document.getElementById('leaderboard-section').style.display = 'none';
}
