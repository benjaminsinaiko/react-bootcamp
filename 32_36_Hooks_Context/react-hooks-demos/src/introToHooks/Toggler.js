/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import useToggle from './introHooks/useToggle';

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);
  const [isBanana, toggleIsBanana] = useToggle(true);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? '😄' : '😢'}</h1>
      <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? '💔' : '❤️'}</h1>
      <h1 onClick={toggleIsBanana}>{isBanana ? '🍌' : '🍏'}</h1>
    </div>
  );
}

export default Toggler;
