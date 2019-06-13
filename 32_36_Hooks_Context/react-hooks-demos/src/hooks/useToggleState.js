import { useState } from 'react';

function useToggleState(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggleState;
