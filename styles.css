* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px 16px;
}

.quiz-container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    padding: 32px;
    max-width: 720px;
    width: 100%;
    text-align: center;
    border: 1px solid rgba(255,255,255,0.2);
    margin: 20px 0;
}

h1 {
    color: #2d3748;
    margin-bottom: 8px;
    font-size: 2.4em;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    color: #4a5568;
    margin-bottom: 24px;
    font-size: 1em;
    font-weight: 400;
}

.score {
    background: linear-gradient(135deg, #48bb78, #38a169);
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 24px;
    display: inline-block;
    box-shadow: 0 6px 16px rgba(72, 187, 120, 0.3);
}

.phase-indicator {
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 20px;
    display: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.phase-main { background: linear-gradient(135deg, #4299e1, #3182ce); }
.phase-bonus { background: linear-gradient(135deg, #ed8936, #dd6b20); }
.phase-super { background: linear-gradient(135deg, #e53e3e, #c53030); }

.question-counter {
    color: #4a5568;
    font-size: 0.9em;
    font-weight: 500;
    margin-bottom: 12px;
    opacity: 0.8;
}

.progress {
    background: rgba(226, 232, 240, 0.8);
    border-radius: 10px;
    height: 8px;
    margin-bottom: 24px;
    overflow: hidden;
    backdrop-filter: blur(5px);
}

.progress-bar {
    background: linear-gradient(135deg, #4299e1, #3182ce);
    height: 100%;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 10px;
}

.question-container {
    margin-bottom: 24px;
}

.question {
    font-size: 1.3em;
    color: #2d3748;
    margin-bottom: 24px;
    font-weight: 600;
    line-height: 1.4;
}

.options {
    display: grid;
    gap: 12px;
    margin-bottom: 24px;
}

.option {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 16px 20px;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    backdrop-filter: blur(5px);
}

.option:hover {
    background: rgba(66, 153, 225, 0.1);
    border-color: #4299e1;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(66, 153, 225, 0.15);
}

.option.selected {
    background: linear-gradient(135deg, #4299e1, #3182ce);
    color: white;
    border-color: #3182ce;
    transform: translateY(-1px);
}

.option.correct {
    background: linear-gradient(135deg, #48bb78, #38a169);
    color: white;
    border-color: #38a169;
    animation: correctPulse 0.6s ease-out;
}

.option.incorrect {
    background: linear-gradient(135deg, #f56565, #e53e3e);
    color: white;
    border-color: #e53e3e;
    animation: incorrectShake 0.6s ease-out;
}

.option.disabled {
    cursor: not-allowed;
    opacity: 0.8;
}

@keyframes correctPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
}

@keyframes incorrectShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    75% { transform: translateX(3px); }
}

.feedback {
    margin: 20px 0;
    padding: 16px;
    border-radius: 12px;
    font-size: 1.1em;
    font-weight: 600;
    display: none;
    backdrop-filter: blur(5px);
}

.feedback.correct {
    background: rgba(72, 187, 120, 0.1);
    color: #276749;
    border: 2px solid rgba(72, 187, 120, 0.3);
}

.feedback.incorrect {
    background: rgba(245, 101, 101, 0.1);
    color: #742a2a;
    border: 2px solid rgba(245, 101, 101, 0.3);
}

.feedback.bonus-correct {
    background: rgba(237, 137, 54, 0.1);
    color: #7b341e;
    border: 2px solid rgba(237, 137, 54, 0.3);
}

.btn {
    border: none;
    padding: 14px 28px;
    font-size: 1.1em;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    margin: 6px;
    box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.btn:disabled {
    background: #a0aec0;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.btn-primary {
    background: linear-gradient(135deg, #4299e1, #3182ce);
    color: white;
}

.btn-secondary {
    background: linear-gradient(135deg, #a0aec0, #718096);
    color: white;
}

.btn-success {
    background: linear-gradient(135deg, #48bb78, #38a169);
    color: white;
}

.btn-danger {
    background: linear-gradient(135deg, #f56565, #e53e3e);
    color: white;
}

.creator-credit {
    color: rgba(77, 89, 104, 0.6);
    font-size: 0.8em;
    font-weight: 400;
    margin-top: 12px;
    margin-bottom: 16px;
    letter-spacing: 0.5px;
}

.performance-insights {
    background: rgba(66, 153, 225, 0.1);
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(66, 153, 225, 0.2);
}

.performance-insights h4 {
    color: #2d3748;
    margin-bottom: 12px;
    font-size: 1.2em;
    font-weight: 600;
}

.insight-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    padding: 6px 0;
}

.insight-label {
    font-weight: 500;
    color: #4a5568;
    font-size: 0.9em;
}

.insight-score {
    font-weight: 600;
    color: #2d3748;
    font-size: 0.9em;
}

.insight-best {
    color: #38a169;
}

.insight-needs-work {
    color: #e53e3e;
}

.share-button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 14px 28px;
    font-size: 1.1em;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 600;
    margin: 6px;
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);
}

.share-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.final-score {
    text-align: center;
    padding: 24px;
}

.final-score h2 {
    color: #2d3748;
    margin-bottom: 20px;
    font-size: 2.2em;
    font-weight: 700;
}

.final-score p {
    font-size: 1.2em;
    color: #4a5568;
    margin-bottom: 16px;
    font-weight: 500;
}

.score-breakdown {
    background: rgba(66, 153, 225, 0.1);
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    backdrop-filter: blur(5px);
}

.bonus-section {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    padding: 24px;
    margin: 20px 0;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.3);
}

.bonus-section h3 {
    color: #2d3748;
    margin-bottom: 16px;
    font-size: 1.5em;
    font-weight: 600;
}

.bonus-section p {
    color: #4a5568;
    margin-bottom: 16px;
    font-size: 1em;
    line-height: 1.5;
}

/* Flag Grid Layout */
.flag-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 24px;
}

.flag-option {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.flag-option:hover {
    background: rgba(66, 153, 225, 0.1);
    border-color: #4299e1;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(66, 153, 225, 0.15);
}

.flag-option.selected {
    background: linear-gradient(135deg, #4299e1, #3182ce);
    border-color: #3182ce;
    transform: translateY(-1px);
}

.flag-option.correct {
    background: linear-gradient(135deg, #48bb78, #38a169);
    border-color: #38a169;
    animation: correctPulse 0.6s ease-out;
    box-shadow: 0 0 20px rgba(72, 187, 120, 0.6);
}

.flag-option.incorrect {
    background: linear-gradient(135deg, #f56565, #e53e3e);
    border-color: #e53e3e;
    animation: incorrectShake 0.6s ease-out;
}

.flag-option.disabled {
    cursor: not-allowed;
    opacity: 0.8;
}

.flag-image {
    width: 70px;
    height: 52px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
    body {
        padding: 12px;
    }
    
    .quiz-container {
        padding: 24px 20px;
        max-height: 95vh;
    }
    
    h1 {
        font-size: 2em;
    }
    
    .question {
        font-size: 1.2em;
    }
    
    .option {
        padding: 14px 16px;
        font-size: 1em;
    }
    
    .flag-grid {
        gap: 10px;
    }
    
    .flag-option {
        padding: 12px;
    }
    
    .flag-image {
        width: 55px;
        height: 41px;
    }
    
    .final-score h2 {
        font-size: 1.8em;
    }
    
    .insight-item {
        flex-direction: column;
        text-align: center;
        gap: 4px;
    }
}

@media (max-width: 480px) {
    .quiz-container {
        padding: 20px 16px;
    }
    
    h1 {
        font-size: 1.8em;
    }
    
    .subtitle {
        font-size: 0.9em;
    }
    
    .question {
        font-size: 1.1em;
    }
    
    .option {
        padding: 12px 14px;
        font-size: 0.95em;
    }
}
