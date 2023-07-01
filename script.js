document.addEventListener('DOMContentLoaded', function() {
    let deckId; // Variable to store the deck ID
    let currentCard; // Variable to store the current card
    let remainingCards; // Variable to store the number of remaining cards
    let gameInProgress = false; // Flag to track if the game is in progress
    let loadingElement = document.getElementById('loading'); // Loading element
    let resultElement = document.getElementById('result'); // Result element
    let blinkInterval; // Interval for blinking effect

    // Disable game buttons
    function disableButtons() {
        document.getElementById('higher').disabled = true;
        document.getElementById('lower').disabled = true;
        document.getElementById('same').disabled = true;
    }

    // Enable game buttons
    function enableButtons() {
        document.getElementById('higher').disabled = false;
        document.getElementById('lower').disabled = false;
        document.getElementById('same').disabled = false;
    }

    // Display card image
    function displayCard(cardUrl) {
        var cardElement = document.createElement('img');
        cardElement.src = cardUrl;
        document.getElementById('cards').appendChild(cardElement);
    }

    // Start a new game
function startGame() {
    gameInProgress = true;
    disableButtons();
    document.getElementById('cards').innerHTML = '';
    resultElement.innerHTML = '';

    // Fetch deck ID using AJAX
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let deckIdData = JSON.parse(xhr.responseText);
            deckId = deckIdData;
            remainingCards = 52; // Assuming a new deck always has 52 cards

            // Fetch current card using the obtained deck ID
            fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
                .then(response => response.json())
                .then(data => {
                    currentCard = data.cards[0];
                    displayCard(currentCard.image);
                    enableButtons();
                });
        }
    };
    xhr.open('GET', 'index.php', true);
    xhr.send();
}


    // Check if the guess is correct
    function checkGuess(nextCard) {
        if (nextCard.value === currentCard.value) {
            resultElement.innerHTML = 'Congratulations! You won the game.';
            gameInProgress = false;
            blinkInterval = setInterval(function() {
                resultElement.classList.toggle('blink');
            }, 500);
            playSound();
            showRestartButton();
        } else {
            resultElement.innerHTML = 'Game Over! You guessed wrong.';
            gameInProgress = false;
            showRestartButton();
        }
    }

    // Make a guess
    function makeGuess(guessedHigher) {
        if (!gameInProgress) return;
        disableButtons();
        loadingElement.classList.remove('hidden');

        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(response => response.json())
            .then(data => {
                var nextCard = data.cards[0];
                displayCard(nextCard.image);

                if ((guessedHigher && nextCard.value > currentCard.value) || (!guessedHigher && nextCard.value < currentCard.value)) {
                    currentCard = nextCard;
                    remainingCards = data.remaining;

                    if (remainingCards === 0) {
                        resultElement.innerHTML = 'Congratulations! You won the game.';
                        gameInProgress = false;
                        blinkInterval = setInterval(function() {
                            resultElement.classList.toggle('blink');
                        }, 500);
                        playSound();
                        showRestartButton();
                    } else {
                        enableButtons();
                    }
                } else {
                    checkGuess(nextCard);
                }

                loadingElement.classList.add('hidden');
            });
    }

    // Play sound tone
    function playSound() {
        var audio = new Audio('sound/winsquare.mp3');
        audio.play();
    }

    // Show restart button
    function showRestartButton() {
        var restartButton = document.getElementById('restart');
        restartButton.classList.remove('hidden');
    }

    // Restart the game
    function restartGame() {
        clearInterval(blinkInterval);
        resultElement.classList.remove('blink');
        var restartButton = document.getElementById('restart');
        restartButton.classList.add('hidden');
        startGame();
    }

    // Guess higher
    document.getElementById('higher').addEventListener('click', function() {
        makeGuess(true);
    });

    // Guess lower
    document.getElementById('lower').addEventListener('click', function() {
        makeGuess(false);
    });

    // Guess same
    document.getElementById('same').addEventListener('click', function() {
        makeGuess(true); // Same as guessing higher since the game allows any of the three options for a correct guess
    });

    // Restart game after winning or guessing wrong
    document.getElementById('restart').addEventListener('click', function() {
        restartGame();
    });

    // Start the game initially
    startGame();
});
