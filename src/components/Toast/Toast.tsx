import React from 'react';

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X as Close,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import ToastIcon from './ToastIcon';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

type ToastProps = {
  message: string | undefined,
  status: string | undefined,
  isOpen: boolean,
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

function Toast({message, status, isOpen, toggleIsOpen} : ToastProps) {

  const iconVariant = status as keyof typeof ICONS_BY_VARIANT;

  function handleDismiss() {
    toggleIsOpen(!isOpen);
  }

  return (
    <div className={`${styles.toast} ${styles[`${status}`]}`}>
      <div className={styles.iconContainer}>
        <ToastIcon 
          icon={ICONS_BY_VARIANT[`${iconVariant}`]} 
        />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button 
        className={styles.closeButton}
        onClick={handleDismiss}
      >
        <ToastIcon icon={Close} />
        <VisuallyHidden>toggleIsOpen message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
