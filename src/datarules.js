export default [{
  id: 'president01', 
  name: 'President',
  deal: 'Starting to the dealers left, deal one card at a time until all cards (52) have been dealt.<br>' +
  'After cards are dealt, the scum must hand over the two best cards in their hand to the president, and the president passes back any two cards they do not want. Same with vice-president and vice-scum but only 1 card.<br>' +
  'Ascending ranking: 3, 4, 5, 6, 7, 8, 9, J, Q, K, A (highest card), 2 (trump card that becomes any of the deck).',
  gameRound: "The player to dealer's left starts by leading (face up) any single card or any set of cards of equal rank (for example three fives). Each player in turn must then either pass (i.e. not play any cards), or play face up a card or set of cards (higher), which beats the previous play.<br>" +
  "It's allowed to play a card with the same rank, skipping the next player who misses a turn.<br>" +
  "Also passing does not prevent you from playing the next time your turn comes round.<br>" +
  "The play continues as many times around the table as necessary until someone makes a play which everyone else passes or plays the highest card (or trump card) that automatically ends the round.<br>" +
  "All the cards played are then turned face down and put to one side, and the player who played last (and highest) starts again by leading any card or set of equal cards.<br>",
  endgame: 'The first player who is out of cards is awarded the highest social rank: president; second player: vice-president; penultimate: vice-scum; last player: scum.<br>',
}, {
  id: 'durak02', 
  name: 'Durak',
  deal: 'Starting to the dealers left, each player is dealt six cards.<br>' +
  'Pick one card from the stock, turn and place face up on the table. Its suit determining the trump suit for the current deal. For example, if it is the 7 of diamonds, then diamonds rank higher than all plain-suit cards. The rest of the pack is then placed on half over the turnup and at right angles to it, so that it remains visible.<br>' +
  'Ascending ranking: 6, 7, 8, 9, J, Q, K, A and then trump cards with same ascending ranking.<br>',
  gameRound: 'The "fool" (who lost the last game) starts attacking the next player (defender) with any single card (face up). A card which is not a trump can be beaten by playing a higher card of the same suit, or by any trump. A trump card can only be beaten by playing a higher trump.<br>' +
  "The attacker and the rest of the players can continue the attack by playing another card, which is of the same rank as some card already played during the current bout – either an attack card or a card played by the defender.<br>" +
  "The total number of cards played by the attackers during a bout must never exceed six or the number of cards in the defender's hand.<br>" +
  'If defender has beaten off all cards, the attackers have to click "Beaten".' +
  "If defender can't " + 'beat off some card, he have to click "Take".<br>' +
  "When an attack is beaten off, the defender becomes the new attacker for the next assault/round which attacks next player, the new defender. Otherwise, the defeated player's turn is skipped and the next one becomes the attacker.<br>" +
  "All players who have spent cards in the round have to draw cards from the pile to reach the minimum of six cards in hand.",
  endgame: 'When the stock has run out (including the trump card face up), the last player left holding cards is the loser.<br>',
}, {
  id: 'mentiroso03', 
  name: 'Mentiroso',
  deal: 'Shuffle a standard deck of playing cards thoroughly.<br>' +
  'Deal the entire deck evenly among all players. Some players might have more cards than others, but this adds to the challenge.<br>' +
  'When a player accumulates all four suits of the same rank, those cards are removed to the discard pile.<br>',
  gameRound: 'The player to the left of the dealer starts the game by placing one or more cards face down in the center.<br>' +
  "The player must declare the rank of the cards they are placing. However, they are not required to tell the truth – lying is part of the game.<br>" +
  "The next player must place one or more cards of same rank as declared but he can actually lie and play the range he want.<br>" +
  'Any player can mistrust the last move and is challenged saying "liar", "cheater", "bullshit", "mentiroso"... the cards in question are revealed.<br>' +
  'If the cards were indeed lied about, the last player who placed them must pick up the entire central pile of cards.<br>' +
  'If the cards were truthfully played, the challenging player must pick up the central pile.<br>' +
  "The player who won the challenge starts the next round by placing any rank of cards he wish, continuing the game.",
  endgame: 'The game continues with rounds of bluffing, challenging, and card play until one player successfully gets rid of all their cards.<br>',
}, {
  id: 'chinchon04', 
  name: 'Chinchón',
  deal: 'Seven cards are dealt to each player if there are 3 or 4 players, or five cards if there are more players.<br>' +
  'A card is placed face-up on the discard pile.<br>' +
  'When a player accumulates all four suits of the same rank, those cards are removed to the discard pile.<br>',
  gameRound: 'The main goal is to form valid combinations of cards in your hand, such as sets or runs, and ultimately be the first to get rid of all your cards.<br>' +
  "Valid combinations:<br>" +
  "- Set: Three cards of the same rank (e.g., three Jacks).<br>" +
  '- Run: Three or more consecutive cards of the same suit (e.g., 5, 6, 7 of hearts).<br>' +
  '- Chinchón: A seven-card run of the same suit.<br>' +
  'During their turn, a player must:<br>' +
  '1. Draw a card from the discard pile or the deck.<br>' +
  '2. Optionally, lay down valid combinations of cards on the table.<br>' +
  "At the end of their turn, a player must discard a card onto the discard pile.",
  endgame: 'Number cards are worth their face value, and face cards (Jacks, Queens, and Kings) are worth 10 points each.<br>' +
  'The goal is to accumulate the fewest points in your unplayed hand.<br>',
}, {
  id: 'higherlower05', 
  name: 'Higher Lower',
  deal: 'Start by shuffling a standard 52-card deck thoroughly.<br>' +
  'Place the shuffled deck face-down, forming the drawing pile.<br>' +
  'Reveal the top card of the drawing pile. This card serves as the starting point for the round.<br>',
  gameRound: "The player's task is to predict if the next card drawn will have a higher or lower value than the revealed card.<br>" +
  'Make your choice and announce whether you believe the next card will be "higher" or "lower".<br>' +
  "Draw the next card from the drawing pile and reveal it. If your prediction is correct:<br>" +
  "1. You continue to the next round with the current card as the starting point.<br>" +
  "2. You may decide to keep your winnings and end the game or continue to the next round, potentially increasing your rewards.<br>" +
  "If your prediction is incorrect:<br>" +
  "1. The round ends and you lose any winnings accumulated during that session.<br>" +
  "2. The game is over, and you can choose to start a new session if you wish.<br>",
  endgame: 'The game concludes when you decide to stop and collect your current winnings.<br>' +
  'You can also choose to continue for as long as you like, aiming to accumulate higher rewards. However, be cautious, as an incorrect prediction results in losing all winnings from that session.<br>',
}];