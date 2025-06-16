// Hidden test function - skip to bonus rounds
function skipToBonus() {
    console.log('skipToBonus called!'); // Debug line
    // Set fake perfect score for testing
    score = 23;
    currentQuestion = 23;
    
    // Update the score display
    updateScore();
    
    // Show the main completion screen
    showMainComplete();
}

var GITHUB_USERNAME = 'mill3rd';  // Replace with your GitHub username
var GITHUB_REPO = 'republic-quiz-scores';             // This should match your repo name
var GITHUB_TOKEN = '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';        // Replace with your personal access token
