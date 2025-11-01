import React from 'react';

import styles from './TextArea.module.css';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  message: string | undefined,
  updateMessage: (event: React.ChangeEvent | undefined) => void,
}

function TextArea({message, updateMessage, ...rest}: TextAreaProps) {
  const id = React.useId();

  console.log({message})

  return (
    <>
      <label
        htmlFor={id}
        className={styles.label}
        style={{ alignSelf: 'baseline' }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea 
          {...rest}
          id={id} 
          className={styles.messageInput} 
          value={message}
          onChange={updateMessage}
        />
      </div>
    </>
  );
}

export default TextArea;
