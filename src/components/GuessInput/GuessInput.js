import React from 'react';

function GuessInput() {
  const [userGuess, setUserGuess] = React.useState('');

  function submitGuess(event){
    event.preventDefault();
    console.log(userGuess);
    setUserGuess('');
  }

  return (
    <form onSubmit={submitGuess}>
      <label htmlFor="guess-input"></label>
      <input 
        type='text'
        value={userGuess}
        pattern='[A-Z]{5}'
        onChange={(event) => {
          if(userGuess.length < 5){
            setUserGuess(event.target.value.toUpperCase());
          }
        }}
      >
      </input>
    </form>
  );
}

export default GuessInput;
