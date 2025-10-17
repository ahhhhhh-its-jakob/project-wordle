import React from 'react';

function GuessContainer({listOfGuesses}) {
  return (
    <div className="guess-results">
      {
        listOfGuesses && listOfGuesses.map((guess) => (
          <p className="guess" key={listOfGuesses[guess]}>{ guess }</p>
        ))
      }
    </div>
)
}

export default GuessContainer;
