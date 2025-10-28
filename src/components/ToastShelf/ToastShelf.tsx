import React from 'react';

import { ToastContext } from '@/providers/ToastProvider/ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const {toasts} = React.useContext(ToastContext);
  
  return (

    <ol className={styles.wrapper}>
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
