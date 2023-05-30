import { SelectHTMLAttributes } from 'react'

interface Options {
  value: string | number
  label: string
}
export interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label?: string
  span?: string
  error?: string
  value: string | number
  marginVertical?: string
  marginHorizontal?: string
  backgroundWhite?: boolean
  options: Options[]
  width?: string
}
