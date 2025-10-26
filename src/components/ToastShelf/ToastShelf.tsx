import React from 'react';

import type { ToastList, ToastToggle } from '@/types/ToastTypes';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

type ToastShelfProps = {item: ToastList[]} & ToastToggle;

function ToastShelf({ item, handleDismiss } : ToastShelfProps) {
  return (
    <ol className={styles.wrapper}>
      {item.map(({id, message, variant}) => {
        return (
          <li 
            key={id}
            className={styles.toastWrapper}
          >
            <Toast
              id={id}
              message={message} 
              variant={variant}
              handleDismiss={handleDismiss}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
