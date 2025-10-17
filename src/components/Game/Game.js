import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput'
import GuessContainer from '../GuessContainer/GuessContainer';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listOfGuesses, setListOfGuesses] = React.useState([]);

  function addToListOfGuesses(userGuess){
    let nextListOfGuesses = [...listOfGuesses];
    nextListOfGuesses.push(userGuess);
    console.log(nextListOfGuesses);
    setListOfGuesses(nextListOfGuesses);
  }

  return (
    <>
      <GuessContainer listOfGuesses={listOfGuesses}></GuessContainer>
      <GuessInput addToListOfGuesses={addToListOfGuesses}></GuessInput>
    </>
  );
}

export default Game;
