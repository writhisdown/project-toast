// Reference: https://dev.to/kirkcodes/revealing-compound-types-in-typescript-2ic8
type Spread<Type> = {[Key in keyof Type]: Type[Key]}

export type ToastContent = {
  message: string | undefined,
  variant: string | undefined,
}

export type ToastId = {id: string}

export type ToastList = Spread<ToastId & ToastContent>;

export type ToastProviderContext = {
  toasts: ToastList[],
  handleNewToast: (message?: string, variant?: string) => void,
  handleDismiss: (selected: string) => void,
  handleDismissAll: () => void,
}


