import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {

  let checkedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      { 
        range(5).map((letter, index) => (
          <span key={index} className={"cell " + (checkedGuess != null && checkedGuess[index].status)}>{value[index]}</span>
        ))
      }
    </p>
  );
}

export default Guess;
