import React from 'react';

import type { ToastList, ToastToggle } from '@/types/ToastTypes';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

type ToastShelfProps = {item: ToastList[]} & ToastToggle;

function ToastShelf({ item, isOpen, toggleIsOpen } : ToastShelfProps) {
  return (
    <ol className={styles.wrapper}>
      {item.map(({id, message, variant}) => {
        return (
          <li 
            key={id}
            className={styles.toastWrapper}
          >
            <Toast 
              message={message} 
              variant={variant} 
              isOpen={isOpen} 
              toggleIsOpen={toggleIsOpen} 
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
