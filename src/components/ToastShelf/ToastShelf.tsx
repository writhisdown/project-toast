import React from 'react';

import { ToastContext } from '@/providers/ToastProvider/ToastProvider';

import useEscapeKey from '@/hooks/useEscapeKey';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts, handleDismissAll} = React.useContext(ToastContext);

  useEscapeKey(handleDismissAll);
  
  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label='Notification'
      className={styles.wrapper}
    >
      {toasts?.map(({id, message, variant}) => {
        return (
          <li 
            key={id}
            className={styles.toastWrapper}
          >
            <Toast
              id={id}
              message={message} 
              variant={variant}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
