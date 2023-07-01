<?php
$deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
$deckData = file_get_contents($deckUrl);
$deck = json_decode($deckData, true);
$deckId = $deck['deck_id'];
echo json_encode($deckId);
?>
