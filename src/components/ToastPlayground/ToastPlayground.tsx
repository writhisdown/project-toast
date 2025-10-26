import React from 'react';

import type { ToastList } from '@/types/ToastTypes';

import useControlInput from '@/hooks/useControlInput';

import Button from '../Button';
import TextArea from '../TextArea';
import RadioInput from '../RadioInput';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

// type Toasts = {
//   id: string,
//   message: string | undefined,
//   variant: string | undefined,
// }

function ToastPlayground() {
  const [checkedValue, toggleChecked, resetChecked] = useControlInput('notice');
  const [message, updateMessage, resetMessage] = useControlInput();
  const [isToastOpen, setIsToastOpen] = React.useState(false);
  const [toasts, setToasts] = React.useState<ToastList[]>([]);

  function updateToast() {
    const newToast: ToastList = {
      id: crypto.randomUUID(),
      message: message,
      variant: checkedValue,
    }

    setToasts((currentToasts) => {
      const nextToast = [...currentToasts, newToast];
      console.log(nextToast);

      return nextToast;
    });
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && (
        <ToastShelf 
          item={toasts}
          // message={message} 
          // variant={checkedValue} 
          isOpen={isToastOpen} 
          toggleIsOpen={setIsToastOpen} 
        />
      )}

      <form 
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          // setIsToastOpen(!isToastOpen);
          updateToast();
          resetChecked();
          resetMessage();
        }}
      >
        <div className={styles.row}>
          <TextArea message={message} updateMessage={updateMessage} />
        </div>

        <fieldset className={styles.row}>
          <legend className={styles.label}>Variant</legend>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              return (
                <RadioInput 
                  key={option} 
                  option={option} 
                  isChecked={checkedValue} 
                  toggleInput={toggleChecked} 
                  name="toast-variants" 
                />
              );
            })}
          </div>
        </fieldset>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
