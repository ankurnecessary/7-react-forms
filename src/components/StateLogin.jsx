import React, { useState } from 'react';
export default function Login() {

  const [enteredValues, setEnteredValues] = useState({email: '', password: ''});

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleChange(field, value) {
    setEnteredValues(prevValue => ({...prevValue, [field]: value}));
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
            onChange={(event) => {
              handleChange('email', event.target.value);
            }}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onChange={(event) => {
              handleChange('password', event.target.value);
            }}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}