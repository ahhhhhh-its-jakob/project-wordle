import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput'
import GuessContainer from '../GuessContainer/GuessContainer';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [listOfGuesses, setListOfGuesses] = React.useState([]);

  let gameState = (listOfGuesses[listOfGuesses.length - 1] === answer) ? 
    { isGameOver: true, isWin: true } : 
    listOfGuesses.length >= NUM_OF_GUESSES_ALLOWED ?
    { isGameOver: true, isWin: false } :
    { isGameOver: false, isWin: false };

  function addToListOfGuesses(userGuess){
    let nextListOfGuesses = [...listOfGuesses];
    nextListOfGuesses.push(userGuess);
    console.log(nextListOfGuesses);
    setListOfGuesses(nextListOfGuesses);
  }

  return (
    <>
      <GuessContainer answer={answer} listOfGuesses={listOfGuesses}></GuessContainer>
      <GuessInput isDisabled={gameState.isGameOver} addToListOfGuesses={addToListOfGuesses}></GuessInput>
      { gameState.isGameOver && <Banner answer={answer} gameResult={gameState.isWin} />}
    </>
  );
}

export default Game;
