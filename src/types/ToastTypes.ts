export type ToastContent = {
  message: string | undefined,
  variant: string | undefined,
}

export type ToastId = {id: string}

export type ToastToggle = {handleDismiss: (selected: string)=> void;}

export type ToastList = ToastId & ToastContent;


