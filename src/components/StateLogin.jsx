import React from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import useInput from '../hooks/useInput.js';
export default function Login() {
  const {
    enteredValue: enteredEmailValue,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput(
    '',
    (value) => isEmail(value) && isNotEmpty(value)
  );

  const {
    enteredValue: enteredPasswordValue,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    console.log({email: enteredEmailValue});
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailHasError ? 'Please enter a valid email' : undefined}
          type="email"
          name="email"
          value={enteredEmailValue}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />

        <Input
          label="Password"
          id="password"
          error={
            passwordHasError ? 'Please enter a valid password' : undefined
          }
          type="password"
          name="password"
          value={enteredPasswordValue}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">
          Login
        </button>
      </p>
    </form>
  );
}
