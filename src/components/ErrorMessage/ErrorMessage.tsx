import React from 'react';

import VisuallyHidden from '../VisuallyHidden';

type ErrorMessageProps = {
  showError: boolean,
  children: React.ReactNode,
}

import styles from './ErrorMessage.module.css';

function ErrorMessage({showError, children}: ErrorMessageProps) {
  return (
    <>
      {showError && (
        <div className={styles.error}>
          <p>
            <VisuallyHidden>Error</VisuallyHidden>
            {children}
          </p>
        </div>
      )}
    </>
  );
}

export default ErrorMessage;
