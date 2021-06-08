import Letters from "./Letters";
import {useEffect, useState} from "react";
import {getRandomGame} from "./api";
import Form from "./Form";
import Feedback from "./Feedback";
import WordList from "./WordList";
import ThemeContext from "./ThemeContext";

function Game() {
  const [game, setGame] = useState(null);
  const [found, setFound] = useState([]);
  const [feedback, setFeedback] = useState("");

  console.log("* Game", game);

  useEffect(function fetchRandomGameOnMount() {
    async function fetchRandomGame() {
      const game = await getRandomGame();
      setGame(game);
    }

    console.log("Game fetchRandomGameOnMount");
    fetchRandomGame();
  }, [ /* only on mount */]);

  function tryWord(word) {
    word = word.toLowerCase();
    console.log("Game tryWord", word, game.center);

    if (!word.includes(game.center)) {
      setFeedback("Must use center letter");
    } else if (word.length < 4) {
      setFeedback("Too short!");
    } else if (found.includes(word)) {
      setFeedback("Already found!");
    } else if (game.wordlist.includes(word)) {
      setFeedback("Added to word list");
      setFound(wl => [...wl, word]);
    } else {
      setFeedback("Not a valid word");
    }
  }

  if (!game) return <div>Loading game...</div>;

  return (
      <div className="Game">
        <ThemeContext.Provider value="gold">
          <Letters letters={game.letters.toUpperCase()} center={game.center.toUpperCase()}/>
          <Form tryWord={tryWord}/>
          <Feedback message={feedback}/>
          <WordList words={found}/>
        </ThemeContext.Provider>
      </div>
  );
}

export default Game;