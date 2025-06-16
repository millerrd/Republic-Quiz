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
