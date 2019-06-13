import React, { useState } from 'react';

function CounterHooks() {
  // 1. The piece of state
  // 2. Function to update that piece of state
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The Count Is: {count}</h1>
      <button onClick={() => setCount(count + 1)} type="button">
        Add 1
      </button>
    </div>
  );
}
export default CounterHooks;
