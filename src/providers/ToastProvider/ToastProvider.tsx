import React from 'react';

import type { 
  ToastList, 
  ToastProviderContext 
} from '@/types/ToastTypes';

type ToastProviderProps = {children: React.ReactNode}

// {} as 'Context' reference: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
export const ToastContext = React.createContext<ToastProviderContext>({} as ToastProviderContext);

function ToastProvider({children} : ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastList[]>([]);

  const handleNewToast = React.useCallback((message?: string, variant?: string) => {
    const newToast: ToastList = {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
    }

    setToasts((currentToasts) => {
      const nextToast = [...currentToasts, newToast];
      console.log(nextToast);

      return nextToast;
    });
  }, []);

  const handleDismiss = React.useCallback((selected: string) => {
    const index = toasts.findIndex((toast) => {
      if (toast.id === selected) {
        return toast;
      }
    });

    const nextToast = [...toasts.slice(0, index), ...toasts.slice(index + 1)];

    setToasts(nextToast);
  }, [toasts]);

  const handleDismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  const value = {toasts, handleNewToast, handleDismiss, handleDismissAll};
  
  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default React.memo(ToastProvider);
