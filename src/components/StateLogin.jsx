import React, { useState } from 'react';
import Input from './Input';
export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  const isEmailInvalid = didEdit.email && !enteredValues.email.includes('@');
  const isPasswordInvalid = didEdit.password && enteredValues.password.trim().length < 6;
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
          error={isEmailInvalid && 'Please enter a valid email'}
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
          error={isPasswordInvalid && 'Please enter a valid password'}
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
