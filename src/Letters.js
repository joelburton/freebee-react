import Letter from "./Letter";
import "./Letters.css";
import {useState} from "react";
import {shuffle} from "lodash";

function Letters({letters, center}) {
  const [randomLetters, setRandomLetters] = useState(Array.from(letters));

  function randomize() {
    setRandomLetters(letters => shuffle(letters));
  }

  return (
      <div className="Letters">
        <Letter letter={center} isCenter />
        { randomLetters.map(letter => (
            <Letter key={letter} letter={letter}/>
        ))}
        <button className="Letters-randomize" onClick={randomize}>⟲</button>
      </div>
  );
}

export default Letters;