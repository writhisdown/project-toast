import React from 'react';

import useControlInput from '@/hooks/useControlInput';

import Button from '../Button';
import TextArea from '../TextArea';
import RadioInput from '../RadioInput';
import Toast from '../Toast/Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [checkedValue, toggleChecked] = useControlInput();
  const [message, updateMessage] = useControlInput();
  const [isToastOpen, setIsToastOpen] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastOpen && (
        <Toast 
          message={message} 
          status={checkedValue} 
          isOpen={isToastOpen} 
          toggleIsOpen={setIsToastOpen} 
        />
      )}

      <form 
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          setIsToastOpen(!isToastOpen);
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
