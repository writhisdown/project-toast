import React from 'react';

import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X as Close,
} from 'react-feather';

import type { ToastContent, ToastId } from '@/types/ToastTypes';

import { ToastContext } from '@/providers/ToastProvider/ToastProvider';

import VisuallyHidden from '../VisuallyHidden';
import ToastIcon from './ToastIcon';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

type ToastProps = ToastId & ToastContent;

function Toast({id, message, variant} : ToastProps) {
  const {handleDismiss} = React.useContext(ToastContext);

  console.log(id)

  // Reference https://www.totaltypescript.com/concepts/type-string-cannot-be-used-to-index-type
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
        onClick={() => {
          // console.log('toast id:', toast.id);
          console.log('selected id:', id);

          handleDismiss(id)
        }}
      >
        <ToastIcon icon={Close} />
        <VisuallyHidden>dismiss toast message</VisuallyHidden>
      </button>
    </div>
  );
}

export default React.memo(Toast);
