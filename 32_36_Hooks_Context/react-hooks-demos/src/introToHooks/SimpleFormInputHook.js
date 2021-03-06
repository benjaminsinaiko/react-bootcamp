import React from 'react';
import useInputState from './introHooks/useInputState';

export default function SimpleFormInputHook() {
  const [email, updateEmail, resetEmail] = useInputState('');
  const [password, updatePassword, resetPassword] = useInputState('');
  return (
    <div>
      <h1>
        Email is: {email} & Password is: {password}
      </h1>
      <input type="text" value={email} onChange={updateEmail} />
      <input type="text" value={password} onChange={updatePassword} />
      <button onClick={resetEmail} type="button">
        Reset Email
      </button>
      <button onClick={resetPassword} type="button">
        Reset Password
      </button>
    </div>
  );
}
