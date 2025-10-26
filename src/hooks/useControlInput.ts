import React from 'react';

function useControlInput(initialValue: string = '') {
  const [inputValue, setInputValue] = React.useState<string | undefined>(initialValue);

  const toggleValue = React.useCallback((event: React.ChangeEvent | undefined) => {
    const element = event?.target as HTMLInputElement;
    const value = element.value;
    setInputValue(value);
  }, []);

  const reset = React.useCallback(() => {
    setInputValue(initialValue);
  }, []);

  return [inputValue, toggleValue, reset] as const;
}

export default useControlInput;