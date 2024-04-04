import React, { useState } from 'react';
import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const isEmailInvalid =
    didEdit.email &&
    (!isEmail(enteredValues.email) ||
    !isNotEmpty(enteredValues.email));
  const isPasswordInvalid =
    didEdit.password &&
    !hasMinLength(enteredValues.password, 6);
  const isFormInvalid = isEmailInvalid;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleChange(identifier, value) {
    setEnteredValues((prevValue) => ({ ...prevValue, [identifier]: value }));
    setDidEdit((prevEdit) => {
      return { ...prevEdit, [identifier]: false };
    });
  }

  function handleBlur(identifier) {
    setDidEdit((prevEdit) => {
      return { ...prevEdit, [identifier]: true };
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={isEmailInvalid ? 'Please enter a valid email' : undefined}
          type="email"
          name="email"
          value={enteredValues.email}
          onBlur={() => {
            handleBlur('email');
          }}
          onChange={(event) => {
            handleChange('email', event.target.value);
          }}
        />

        <Input
          label="Password"
          id="password"
          error={
            isPasswordInvalid ? 'Please enter a valid password' : undefined
          }
          type="password"
          name="password"
          value={enteredValues.password}
          onBlur={() => {
            handleBlur('password');
          }}
          onChange={(event) => {
            handleChange('password', event.target.value);
          }}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" disabled={isFormInvalid}>
          Login
        </button>
      </p>
    </form>
  );
}
