import React from 'react';

type RadioInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  option: string,
  isChecked: string | undefined,
  toggleInput: (event: React.ChangeEvent | undefined) => void,
}

function RadioInput({option, isChecked, toggleInput, ...rest}: RadioInputProps) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      <input
        {...rest}
        id={id}
        type="radio"
        value={option}
        checked={option === isChecked}
        onChange={toggleInput}
      />
      {option}
    </label>
  );
}

export default RadioInput;
