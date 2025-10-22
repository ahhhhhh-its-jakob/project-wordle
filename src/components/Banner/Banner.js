import React from 'react';


function Banner({ answer, gameResult }) {

  let bannerClass = gameResult ? 'happy' : 'sad';

  function Happy(){
    return (
      <p>
        <strong> Congratulations! You win! </strong>
      </p>
    );
  }

  function Sad(){
    return (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    );
  }

  return (
    <div className={'banner ' + bannerClass}>
      { gameResult ? <Happy/> : <Sad/> }
    </div>
  );
}

export default Banner;
