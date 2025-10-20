import React from 'react';

function useControlInput() {
  const [inputValue, setInputValue] = React.useState<string | undefined>('');

  const toggleValue = React.useCallback((event: React.ChangeEvent | undefined) => {
    const element = event?.target as HTMLInputElement;
    const value = element.value;
    setInputValue(value);
  }, []);

  return [inputValue, toggleValue] as const;
}

export default useControlInput;