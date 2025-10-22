import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessContainer({listOfGuesses, answer}) {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
          <Guess answer={answer} key={index} value={listOfGuesses[index] != null && listOfGuesses[index]}></Guess>
        ))
      }
    </div>
)
}

export default GuessContainer;
