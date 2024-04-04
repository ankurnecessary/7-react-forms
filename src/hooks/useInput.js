import { useState } from 'react';
export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFn(enteredValue);

  function handleChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleBlur() {
    setDidEdit(true);
  }

  return {
    enteredValue,
    handleChange,
    handleBlur,
    hasError: didEdit && !valueIsValid
  };
}