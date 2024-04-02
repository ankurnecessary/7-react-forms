import React, { useState } from 'react';
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
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
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
          <div className="control-error">
            {isEmailInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
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
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" disabled={isFormInvalid}>Login</button>
      </p>
    </form>
  );
}
