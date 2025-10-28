import React from 'react';

import { ToastContext } from '@/providers/ToastProvider/ToastProvider';

import useControlInput from '@/hooks/useControlInput';

import Button from '../Button';
import TextArea from '../TextArea';
import RadioInput from '../RadioInput';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [checkedValue, toggleChecked, resetChecked] = useControlInput('notice');
  const [message, updateMessage, resetMessage] = useControlInput();
  const {toasts, handleToast} = React.useContext(ToastContext);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    // TODO: Add error message when form is submitted
    // while the textarea message is an empty string
    if (message === '') {
      return;
    }

    handleToast(message, checkedValue);
    resetChecked();
    resetMessage();
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toasts.length > 0 && (
        <ToastShelf />
      )}

      <form 
        className={styles.controlsWrapper}
        onSubmit={handleSubmit}
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

export default React.memo(ToastPlayground);
