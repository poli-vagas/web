import { TextareaHTMLAttributes } from 'react'

export interface InputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
  error?: string
  value: string | number
  marginVertical?: string
  marginHorizontal?: string
  backgroundWhite?: boolean
}
