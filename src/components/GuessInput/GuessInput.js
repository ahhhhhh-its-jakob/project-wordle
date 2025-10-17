import React from 'react';

function GuessInput({addToListOfGuesses}) {
  const [userGuess, setUserGuess] = React.useState('');

  function submitGuess(event){
    event.preventDefault();
    console.log(userGuess);
    addToListOfGuesses(userGuess);

    setUserGuess('');
  }

  return (
    <form onSubmit={submitGuess}>
      <label htmlFor='guess-input'></label>
      <input 
        id='guess-input'
        type='text'
        value={userGuess}
        pattern='[A-Z]{5}'
        title='Please enter a 5 letter word'
        onChange={(event) => {
          setUserGuess(event.target.value.toUpperCase());
        }}
      >
      </input>
    </form>
  );
}

export default GuessInput;
