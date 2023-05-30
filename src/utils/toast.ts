import { toast } from 'react-toastify'

export const toastError = (error: unknown | Error, callback?: () => void) => {
  if (error instanceof Error) {
    toast.dismiss()
    toast.error(error.message)
    callback && callback()
    return
  }
}

export const toastSuccess = (message: string, callback?: () => void) => {
  toast.dismiss()
  toast.success(message)
  callback && callback()
  return
}
