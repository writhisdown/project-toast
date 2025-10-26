import React from 'react';

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X as Close,
} from 'react-feather';

import type { ToastContent, ToastId, ToastToggle } from '@/types/ToastTypes';

import VisuallyHidden from '../VisuallyHidden';
import ToastIcon from './ToastIcon';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

type ToastProps = ToastId & ToastContent & ToastToggle;

function Toast({id, message, variant, handleDismiss} : ToastProps) {

  const iconVariant = variant as keyof typeof ICONS_BY_VARIANT;

  return (
    <div 
      role="region"
      aria-live="polite"
      className={`${styles.toast} ${styles[`${variant}`]}`}
    >
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
        onClick={() => handleDismiss(id)}
      >
        <ToastIcon icon={Close} />
        <VisuallyHidden>dismiss toast message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
