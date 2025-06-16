// Leaderboard Functions - Handles reading/writing scores to GitHub

// Save score to leaderboard
function saveToLeaderboard() {
    var playerName = document.getElementById('playerName').value.trim();
    
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }
    
    if (playerName.length > 20) {
        alert('Name must be 20 characters or less!');
        return;
    }
    
    var totalPoints = score + bonusScores.capital + bonusScores.language + bonusScores.flag + superBonusScore;
    var overallPercentage = Math.round((totalPoints / 100) * 100);
    
    var newScore = {
        name: playerName,
        score: totalPoints,
        percentage: overallPercentage,
        date: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
        breakdown: {
            adjectives: score,
            capitals: bonusScores.capital,
            languages: bonusScores.language,
            flags: bonusScores.flag,
            superBonus: superBonusScore
        }
    };
    
    // Show loading message
    var saveBtn = document.querySelector('button[onclick="saveToLeaderboard()"]');
    var originalText = saveBtn.textContent;
    saveBtn.textContent = 'Saving...';
    saveBtn.disabled = true;
    
    // Add score to leaderboard
    addScoreToLeaderboard(newScore, function(success) {
        if (success) {
            saveBtn.textContent = 'Saved! ✅';
            setTimeout(function() {
                saveBtn.textContent = originalText;
                saveBtn.disabled = false;
            }, 2000);
        } else {
            saveBtn.textContent = 'Error - Try Again';
            saveBtn.disabled = false;
            setTimeout(function() {
                saveBtn.textContent = originalText;
            }, 2000);
        }
    });
}

// Add score to GitHub leaderboard
function addScoreToLeaderboard(newScore, callback) {
    // First, get current leaderboard
    fetch('https://api.github.com/repos/' + GITHUB_USERNAME + '/' + GITHUB_REPO + '/contents/leaderboard.json', {
        headers: {
            'Authorization': 'token ' + GITHUB_TOKEN,
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Failed to fetch leaderboard');
        }
        return response.json();
    })
    .then(function(data) {
        // Decode the current content
        var currentContent = JSON.parse(atob(data.content));
        
        // Add new score
        currentContent.scores.push(newScore);
        
        // Sort by score (highest first)
        currentContent.scores.sort(function(a, b) {
            return b.score - a.score;
        });
        
        // Keep only top 10 scores
        currentContent.scores = currentContent.scores.slice(0, 10);
        
        // Update the file
        var updatedContent = btoa(JSON.stringify(currentContent, null, 2));
        
        return fetch('https://api.github.com/repos/' + GITHUB_USERNAME + '/' + GITHUB_REPO + '/contents/leaderboard.json', {
            method: 'PUT',
            headers: {
                'Authorization': 'token ' + GITHUB_TOKEN,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Add new quiz score: ' + newScore.name + ' - ' + newScore.score + '/100',
                content: updatedContent,
                sha: data.sha
            })
        });
    })
    .then(function(response) {
        if (response.ok) {
            callback(true);
        } else {
            throw new Error('Failed to update leaderboard');
        }
    })
    .catch(function(error) {
        console.error('Error updating leaderboard:', error);
        callback(false);
    });
}

// Load and display leaderboard
function loadLeaderboard() {
    var leaderboardContent = document.getElementById('leaderboard-content');
    leaderboardContent.innerHTML = '<p>Loading leaderboard...</p>';
    
    fetch('https://api.github.com/repos/' + GITHUB_USERNAME + '/' + GITHUB_REPO + '/contents/leaderboard.json', {
        headers: {
            'Authorization': 'token ' + GITHUB_TOKEN,
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Failed to fetch leaderboard');
        }
        return response.json();
    })
    .then(function(data) {
        var leaderboardData = JSON.parse(atob(data.content));
        displayLeaderboard(leaderboardData.scores);
    })
    .catch(function(error) {
        console.error('Error loading leaderboard:', error);
        leaderboardContent.innerHTML = '<p>Error loading leaderboard. Please try again.</p>';
    });
}

// Display leaderboard data
function displayLeaderboard(scores) {
    var leaderboardContent = document.getElementById('leaderboard-content');
    
    if (!scores || scores.length === 0) {
        leaderboardContent.innerHTML = '<p>No scores yet. Be the first!</p>';
        return;
    }
    
    var html = '';
    for (var i = 0; i < scores.length; i++) {
        var scoreData = scores[i];
        var rank = i + 1;
        var isTopThree = rank <= 3;
        
        var rankEmoji = '';
        if (rank === 1) rankEmoji = '🥇';
        else if (rank === 2) rankEmoji = '🥈';
        else if (rank === 3) rankEmoji = '🥉';
        else rankEmoji = rank + '.';
        
        html += '<div class="leaderboard-item' + (isTopThree ? ' top-three' : '') + '">' +
            '<span class="leaderboard-rank">' + rankEmoji + '</span>' +
            '<span class="leaderboard-name">' + escapeHtml(scoreData.name) + '</span>' +
            '<span class="leaderboard-score">' + scoreData.score + '/100 (' + scoreData.percentage + '%)</span>' +
            '</div>';
        
        // Show breakdown for top 3
        if (isTopThree && scoreData.breakdown) {
            html += '<div style="font-size: 0.9em; color: #666; margin: 4px 0 12px 56px;">' +
                'Adj: ' + scoreData.breakdown.adjectives + ' | ' +
                'Cap: ' + scoreData.breakdown.capitals + ' | ' +
                'Lang: ' + scoreData.breakdown.languages + ' | ' +
                'Flags: ' + scoreData.breakdown.flags + ' | ' +
                'Bonus: ' + scoreData.breakdown.superBonus +
                '</div>';
        }
    }
    
    leaderboardContent.innerHTML = html;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Check if GitHub configuration is set up
function checkGitHubConfig() {
    if (typeof GITHUB_USERNAME === 'undefined' || 
        typeof GITHUB_REPO === 'undefined' || 
        typeof GITHUB_TOKEN === 'undefined') {
        console.warn('GitHub configuration not found. Leaderboard features disabled.');
        return false;
    }
    
    if (!GITHUB_USERNAME || !GITHUB_REPO || !GITHUB_TOKEN) {
        console.warn('GitHub configuration incomplete. Leaderboard features disabled.');
        return false;
    }
    
    return true;
}

// Initialize leaderboard (called when page loads)
function initLeaderboard() {
    if (!checkGitHubConfig()) {
        // Hide leaderboard features if not configured
        var leaderboardButtons = document.querySelectorAll('button[onclick*="leaderboard"], button[onclick*="Leaderboard"]');
        for (var i = 0; i < leaderboardButtons.length; i++) {
            leaderboardButtons[i].style.display = 'none';
        }
    }
}
