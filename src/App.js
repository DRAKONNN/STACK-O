import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import games from './datagames';
import rules from './datarules';
import React, {useCallback, useState} from "react";
//import { Button } from 'react-bootstrap';

const CATEGORIES = [
  "Calm", 
  "Party", 
  "Frenetic", 
  "Strategy",
];

const GAMES = games;


function RenderCategories(props) {
  const { 
    categories,
    onFilterChange,
  } = props
  
  return (
      <ul className="dropdown-menu checkbox-menu allow-focus">
        {categories.map(category => (
          <li key={category}>
            <label>
              <input onChange={onFilterChange} type="checkbox" value={category} /> {category}
            </label>
          </li>
        ))}
      </ul>
  )
}

/*function RenderDurations(props) {
  const { 
    durations,
    selectedDuration,
    onDurationChange,
  } = props
  
  return (
      <ul className="dropdown-menu checkbox-menu allow-focus">
        {durations.map(duration => (
          <li key={duration.value} className={`list-group-item ${selectedDuration === duration.value ? 'active' : ''}`}>
            <label>
              <input type="radio" className="form-check-input" value={duration.value} checked={selectedDuration === duration.value} onChange={onDurationChange} /> {duration.label}
            </label>
          </li>
        ))}
      </ul>
  )
}*/

function Game(props) {
  const { game } = props
  
  return (
    <div key={game.id} className="col-lg-6 quick party frenetic">
    <div className={`${game.classAttBackground} me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center text-white overflow-hidden`}>
      <h5 className="text-start"><span className={`badge ${game.classAttPlayers}`}><i className="fas fa-users" aria-hidden="true"></i> {game.minPlayers}-{game.maxPlayers}</span></h5>
      <h5 className="text-start"><span className={`badge rounded-pill ${game.classAttTime}`}><i className="fas fa-clock" aria-hidden="true"></i> {game.minTime}-{game.maxTime} min</span></h5>
      <div className="my-3 py-3">
        <h2 className="display-5">{game.name}</h2>
        <h3 className="display-6">{game.surname}</h3>
        <p className="lead">{game.description}</p>
        <button className={`btn ${game.classAttButton}`} type="button" data-bs-toggle="offcanvas" data-bs-target={`#${game.id}`}>
          Read rules!
        </button>
      </div>
      <div className={`${game.classAttImage} shadow-sm mx-auto card-block`}><img className="card-img-bottom" src={game.imageUrl} alt={game.name} />
      </div>
    </div>
  </div>
  )
}

function GamesList(props) {
  const { games } = props
  
  return (
    <>
      {games.map(game => (
        <Game game={game} />
      ))}
    </>
  )
}

function App() {

  const [state, setState] = useState({
    games: GAMES,
    filters: new Set(),
  })

  const [numberPlayers, setNumberPlayers] = useState(4);

  const [selectedDuration, setSelectedDuration] = useState(12);
  
  const handleFilterChange = useCallback((event) => {
    setState(previousState => {
      let filters = new Set(previousState.filters)
      let games = GAMES

      if (event.target.checked) {
        filters.add(event.target.value)
      } else {
        filters.delete(event.target.value)
      }
      console.log(selectedDuration);
      var valueInputPlayers = document.getElementById("rangeInputPlayers").value;
      var valueInputDuration = document.getElementById("rangeInputDuration").value;
      if (filters.size) {
        games = games.filter(game => {
          const categoryMatch = filters.has(game.category);
          if (game.minPlayers <= valueInputPlayers && game.maxPlayers >= valueInputPlayers) {
            if (game.minTime <= valueInputDuration && game.maxTime >= valueInputDuration) {
              return categoryMatch;
            }
          }
        })
      } else {
        games = games.filter(game => {
          const playersMatch = game.minPlayers <= valueInputPlayers && game.maxPlayers >= valueInputPlayers;
          if (game.minTime <= valueInputDuration && game.maxTime >= valueInputDuration) {
            return playersMatch;
          }
        })
      }
      
      return {
        filters,
        games,
      }
    })
  }, [setState])

  const handlePlayersChange = (event) => {
    const newNumberPlayers = parseInt(event.target.value);
    setNumberPlayers(newNumberPlayers);
    handleFilterChange(event);
  };
  const handleDurationChange = (event) => {
    const newSelectedDuration = parseInt(event.target.value);
    setSelectedDuration(newSelectedDuration);
    handleFilterChange(event);
  };

  /*const handleRadioChange = event => {
    setSelectedDuration(event.target.value);
    console.log(selectedDuration);
    handleFilterChange(event);
  };*/

  return (
  <div>
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">STACK'O</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapseNavbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Categories</a>
            <RenderCategories categories={CATEGORIES} onFilterChange={handleFilterChange} />
          </li>
          <li className="nav-item custom-range">
            <input type="range" className="form-range" min="1" max="10" step="1" id="rangeInputPlayers" value={numberPlayers} onChange={handlePlayersChange} />
            <p className="navbar-text">Players: {numberPlayers}</p>
          </li>
          <li className="nav-item custom-range">
            <input type="range" className="form-range" min="5" max="20" step="1" id="rangeInputDuration" value={selectedDuration} onChange={handleDurationChange} />
            <p className="navbar-text">Minutes: {selectedDuration}</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <header>
    {/* <div className="overlay"></div> */} 
    <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
      <source src="media/CardOverlay.mov" type="video/mp4" />
    </video>

    <div className="container h-100 text-center align-items-center align-middle justify-content-center">
      <div className="d-flex h-100 text-center align-items-center align-middle justify-content-center">
        <div className="w-100 text-white">
          <h1 className="display-3">Welcome to Stack'o</h1>
          <p className="lead mb-0">A library of different card games</p>
        </div>
      </div>
    </div>
  </header>

  <div className="container">
    <div className="row row-cols-1 gy-5">
      
      <GamesList games={state.games} />

      {/*
      <div className="col-lg-6 quick party frenetic">
        <div className="bg-primary me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center text-white overflow-hidden">
          <h5 className="text-start"><span className="badge bg-light text-dark"><i className="fas fa-users" aria-hidden="true"></i> 4-8</span></h5>
          <h5 className="text-start"><span className="badge rounded-pill bg-light text-dark"><i className="fas fa-clock" aria-hidden="true"></i> 5-15 min</span></h5>
          <div className="my-3 py-3">
            <h2 className="display-5">President</h2>
            <h3 className="display-6">(Asshole, Capitalism or Scum)</h3>
            <p className="lead">Race to get rid of all of the cards in their hands in order to become "president"</p>
            <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#presidentOffCanvas">
              Read rules!
            </button>
          </div>
          <div className="bg-light shadow-sm mx-auto card-block"><img className="card-img-bottom" src="images/President.png" alt="Card image" />
          </div>
        </div>
      </div>

      <div className="col-lg-6 quick strategy">
        <div className="bg-danger me-md-3 pt-3 px-3 pt-md-3 px-md-5 text-center text-white overflow-hidden">
          <h5 className="text-start"><span className="badge bg-warning"><i className="fas fa-users" aria-hidden="true"></i> 2-6</span></h5>
          <h5 className="text-start"><span className="badge rounded-pill bg-warning"><i className="fas fa-clock" aria-hidden="true"></i> 5-15 min</span></h5>
          <div className="my-3 p-3">
            <h2 className="display-5">Durak</h2>
            <h3 className="display-6">("Fool", Kur or Russian War)</h3>
            <p className="lead">Attack your opponents and defend yourself from others so as not to become the "fool"</p>
            <button className="btn btn-warning text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#durakOffCanvas">
              Read rules!
            </button>
          </div>
          <div className="bg-warning shadow-sm mx-auto card-block"><img className="card-img-bottom" src="images/Durak.png" alt="Card image" /></div>
        </div>
      </div>
      */} 
    </div>
  </div>

  {/* Creating offcanvas for the rules and set with dangerouslySetInnerHTML to avoid <br> issues*/} 
  {rules.map(rule => {
        return (
          <div className="offcanvas offcanvas-start text-bg-dark" id={rule.id}>
            <div className="offcanvas-header">
              <h1 className="offcanvas-title">Rules</h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
              <h2>Deal</h2>
              <p dangerouslySetInnerHTML={{ __html: rule.deal }} />
              <h2>Game round</h2>
              <p dangerouslySetInnerHTML={{ __html: rule.gameRound }} />
              <h2>Endgame</h2>
              <p dangerouslySetInnerHTML={{ __html: rule.endgame }} />
              </div>
          </div>
        )
      })}

  {/*
  <div className="offcanvas offcanvas-start text-bg-dark" id="president01">
    <div className="offcanvas-header">
      <h1 className="offcanvas-title">Rules</h1>
      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div className="offcanvas-body">
      <h2>Deal</h2>
      <p>Starting to the dealers left, deal one card at a time until all cards (52) have been dealt.</p>
      <p>After cards are dealt, the scum must hand over the two best cards in their hand to the president, and the president passes back any two cards they do not want. 
        Same with vice-president and vice-scum but only 1 card.</p>
      <p>Ascending ranking: 3, 4, 5, 6, 7, 8, 9, J, Q, K, A (highest card), 2 (trump card that becomes any of the deck).</p>
      <h2>Game round</h2>
      <p>The player to dealer's left starts by leading (face up) any single card or any set of cards of equal rank (for example three fives). 
        Each player in turn must then either pass (i.e. not play any cards), or play face up a card or set of cards (higher), which beats the previous play.</p>
      <p>It's allowed to play a card with the same rank, skipping the next player who misses a turn</p>
      <p>Also passing does not prevent you from playing the next time your turn comes round.</p>
      <p>The play continues as many times around the table as necessary until someone makes a play which everyone else passes or plays the highest card (or trump card) that automatically ends the round.</p>
      <p>All the cards played are then turned face down and put to one side, and the player who played last (and highest) starts again by leading any card or set of equal cards.</p>
      <h2>Endgame</h2>
      <p>The first player who is out of cards is awarded the highest social rank: president; second player: vice-president; penultimate: vice-scum; last player: scum</p>
      </div>
  </div>
  <div className="offcanvas offcanvas-start text-bg-dark" id="durakOffCanvas">
    <div className="offcanvas-header">
      <h1 className="offcanvas-title">Rules</h1>
      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
    </div>
    <div className="offcanvas-body">
      <h2>Deal</h2>
      <p>Starting to the dealers left, each player is dealt six cards.</p>
      <p>Pick one card from the stock, turn and place face up on the table. 
        Its suit determining the trump suit for the current deal. 
        For example, if it is the 7 of diamonds, then diamonds rank higher than all plain-suit cards. 
        The rest of the pack is then placed on half over the turnup and at right angles to it, so that it remains visible.</p>
      <p>Ascending ranking: 6, 7, 8, 9, J, Q, K, A and then trump cards with same ascending ranking.</p>
      <h2>Game round</h2>
      <p>The "fool" (who lost the last game) starts attacking the next player (defender) with any single card (face up). 
        A card which is not a trump can be beaten by playing a higher card of the same suit, or by any trump. 
        A trump card can only be beaten by playing a higher trump.</p>
      <p>The attacker and the rest of the players can continue the attack by playing another card, 
        which is of the same rank as some card already played during the current bout – either an attack card or a card played by the defender.</p>
      <p>The total number of cards played by the attackers during a bout must never exceed six or the number of cards in the defender's hand.</p>
      <p>If defender has beaten off all cards, the attackers have to click "Beaten".</p>
      <p>If defender can't beat off some card, he have to click "Take".</p>
      <p>When an attack is beaten off, the defender becomes the new attacker for the next assault/round which attacks next player, the new defender. 
        Otherwise, the defeated player's turn is skipped and the next one becomes the attacker.</p>
      <p>All players who have spent cards in the round have to draw cards from the pile to reach the minimum of six cards in hand.</p>
      <h2>Endgame</h2>
      <p>When the stock has run out (including the trump card face up), the last player left holding cards is the loser.</p>
    </div>
  </div>
  */} 

  <footer className="container py-5">
    <div className="row">
      <div className="col-12 col-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
        <small className="d-block mb-3 text-muted">&copy; 2023–2023</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Cool stuff</a></li>
          <li><a className="link-secondary" href="#">Random feature</a></li>
          <li><a className="link-secondary" href="#">Team feature</a></li>
          <li><a className="link-secondary" href="#">Stuff for developers</a></li>
          <li><a className="link-secondary" href="#">Another one</a></li>
          <li><a className="link-secondary" href="#">Last time</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Resource name</a></li>
          <li><a className="link-secondary" href="#">Resource</a></li>
          <li><a className="link-secondary" href="#">Another resource</a></li>
          <li><a className="link-secondary" href="#">Final resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Business</a></li>
          <li><a className="link-secondary" href="#">Education</a></li>
          <li><a className="link-secondary" href="#">Government</a></li>
          <li><a className="link-secondary" href="#">Gaming</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li><a className="link-secondary" href="#">Team</a></li>
          <li><a className="link-secondary" href="#">Locations</a></li>
          <li><a className="link-secondary" href="#">Privacy</a></li>
          <li><a className="link-secondary" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
  );
}

export default App;
