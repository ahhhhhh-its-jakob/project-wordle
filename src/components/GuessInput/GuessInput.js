import React from 'react';

function GuessInput({isDisabled, addToListOfGuesses}) {
  const [userGuess, setUserGuess] = React.useState('');

  function submitGuess(event){
    event.preventDefault();
    console.log(userGuess);
    addToListOfGuesses(userGuess);

    setUserGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor='guess-input'></label>
      {!isDisabled ? ( <input 
        id='guess-input'
        type='text'
        value={userGuess}
        pattern='[A-Z]{5}'
        title='Please enter a 5 letter word'
        onChange={(event) => {
          setUserGuess(event.target.value.toUpperCase());
        }}
      >
      </input>) : <input disabled></input>}
    </form>
  );
}

export default GuessInput;
