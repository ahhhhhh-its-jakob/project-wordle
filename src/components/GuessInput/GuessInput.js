import React from 'react';

function GuessInput() {
  const [userGuess, setUserGuess] = React.useState("");

  function submitGuess(){
    let guess = {guess: userGuess};
    console.log(guess);
    setUserGuess("");
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault(); //prevent default due to default behavior of sending network request (we dont need this)
        submitGuess();
      }}
    >
      <label htmlFor="guess-input"> Enter Guess: </label>
      <input 
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}" //regex that specifies the input should be exactly 5 characters long
        value={userGuess}
        onChange={event => {
          let word = event.target.value;
          setUserGuess(word.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
