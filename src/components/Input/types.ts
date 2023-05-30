import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import { BeforeMaskedStateChangeStates, InputState } from 'react-input-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export const maskOptionCurrency = {
  prefix: 'R$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false
}

export const currencyMask = createNumberMask(maskOptionCurrency)

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  currency?: boolean
  mask?: string | (string | RegExp)[]
  error?: string
  value?: string | number
  marginVertical?: string
  marginHorizontal?: string
  showPassword?: boolean
  backgroundWhite?: boolean
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState
  leftIcon?: React.ComponentType<IconBaseProps>
  rightIcon?: React.ComponentType<IconBaseProps>
}
