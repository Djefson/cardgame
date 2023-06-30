<?php

// line 2-8: Variable Declarations
$deckId;
$currentCard;
$remainingCards;
$gameInProgress = false;
$loadingElement = $_GET['loading'];
$resultElement = $_GET['result'];
$blinkInterval;

// line 11-16: Disable game buttons
function disableButtons()
{
    $_GET['higher']->disabled = true;
    $_GET['lower']->disabled = true;
    $_GET['same']->disabled = true;
}

// line 19-24: Enable game buttons
function enableButtons()
{
    $_GET['higher']->disabled = false;
    $_GET['lower']->disabled = false;
    $_GET['same']->disabled = false;
}

// line 27-33: Display card image
function displayCard($cardUrl)
{
    $cardElement = '<img src="' . $cardUrl . '">';
    $_GET['cards'] .= $cardElement;
}

// line 36-59: Start a new game
function startGame()
{
    $gameInProgress = true;
    disableButtons();
    $_GET['cards'] = '';
    $resultElement = '';

    $deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    $deckData = json_decode(file_get_contents($deckUrl), true);
    $deckId = $deckData['deck_id'];
    $remainingCards = $deckData['remaining'];

    $drawUrl = "https://deckofcardsapi.com/api/deck/$deckId/draw/?count=1";
    $drawData = json_decode(file_get_contents($drawUrl), true);
    $currentCard = $drawData['cards'][0];
    displayCard($currentCard['image']);
    enableButtons();
}

// line 62-90: Check if the guess is correct
function checkGuess($nextCard)
{
    if ($nextCard['value'] === $currentCard['value']) {
        $resultElement = 'Congratulations! You won the game.';
        $gameInProgress = false;
        $blinkInterval = setInterval(function() {
            $resultElement.classList.toggle('blink');
        }, 500);
        playSound();
        showRestartButton();
    } else {
        $resultElement = 'Game Over! You guessed wrong.';
        $gameInProgress = false;
        showRestartButton();
    }
}

// line 93-128: Make a guess
function makeGuess($guessedHigher)
{
    if (!$gameInProgress) return;
    disableButtons();
    $loadingElement.classList.remove('hidden');

    $drawUrl = "https://deckofcardsapi.com/api/deck/$deckId/draw/?count=1";
    $drawData = json_decode(file_get_contents($drawUrl), true);
    $nextCard = $drawData['cards'][0];
    displayCard($nextCard['image']);

    if (($guessedHigher && $nextCard['value'] > $currentCard['value']) || (!$guessedHigher && $nextCard['value'] < $currentCard['value'])) {
        $currentCard = $nextCard;
        $remainingCards = $drawData['remaining'];

        if ($remainingCards === 0) {
            $resultElement = 'Congratulations! You won the game.';
            $gameInProgress = false;
            $blinkInterval = setInterval(function() {
                $resultElement.classList.toggle('blink');
            }, 500);
            playSound();
            showRestartButton();
        } else {
            enableButtons();
        }
    } else {
        checkGuess($nextCard);
    }

    $loadingElement.classList.add('hidden');
}

// line 131-137: Play sound tone
function playSound()
{
    $audio = new Audio('sound/winsquare.mp3');
    $audio->play();
}

// line 140-144: Show restart button
function showRestartButton()
{
    $restartButton = $_GET['restart'];
    $restartButton->classList.remove('hidden');
}

// line 147-158: Restart the game
function restartGame()
{
    clearInterval($blinkInterval);
    $resultElement->classList.remove('blink');
    $restartButton = $_GET['restart'];
    $restartButton->classList.add('hidden');
    startGame();
}

// line 161-165: Guess higher
if (isset($_POST['higher'])) {
    makeGuess(true);
}

// line 168-172: Guess lower
if (isset($_POST['lower'])) {
    makeGuess(false);
}

// line 175-179: Guess same
if (isset($_POST['same'])) {
    makeGuess(true);
}

// line 182-186: Restart game after winning or guessing wrong
if (isset($_POST['restart'])) {
    restartGame();
}

// line 189-193: Start the game initially
startGame();

?>
