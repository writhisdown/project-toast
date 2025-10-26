export type ToastProps = {
  message: string | undefined,
  variant: string | undefined,
  isOpen: boolean,
  toggleIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}