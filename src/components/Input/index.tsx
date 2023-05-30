/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState
} from 'react'
import { useTheme } from 'styled-components'
import { FiAlertCircle } from 'react-icons/fi'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import MaskedInput from 'react-text-mask'
import InputMask from 'react-input-mask'
import { InputProps, currencyMask } from './types'

import * as S from './styles'

const Input: React.FC<InputProps> = ({
  name,
  label,
  error,
  mask,
  currency,
  value,
  marginVertical,
  marginHorizontal,
  showPassword,
  backgroundWhite,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  beforeMaskedStateChange,
  type,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [showPasswordStatus, setShowPasswordStatus] = useState(false)
  const theme = useTheme()

  const handleInputFocus = useCallback(() => {
    setIsFocused(() => true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(() => false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  const togglePasswordVisiblity = useCallback(() => {
    setShowPasswordStatus(!showPasswordStatus)
  }, [showPasswordStatus])

  const validateTypePassword = () => {
    if (showPassword) {
      return showPasswordStatus ? 'text' : 'password'
    }
    return type
  }
  return (
    <S.Container
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
      width={rest?.width}
    >
      <S.Label>
        {label}{' '}
        {error && (
          <S.Error title={error}>
            <FiAlertCircle color={theme.colors.primary} size={20} />
          </S.Error>
        )}
      </S.Label>
      <S.InputWrapper
        backgroundWhite={backgroundWhite}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        width={rest?.width}
      >
        {LeftIcon && <LeftIcon size={20} />}
        {!mask && !currency && (
          <input
            id={name}
            name={name}
            value={value}
            ref={inputRef}
            type={validateTypePassword()}
            {...rest}
          />
        )}

        {!mask && currency && (
          <MaskedInput
            mask={currencyMask}
            id={name}
            name={name}
            value={value}
            {...rest}
          />
        )}

        {mask && !currency && (
          <InputMask
            mask={mask}
            id={name}
            name={name}
            value={value}
            beforeMaskedStateChange={beforeMaskedStateChange}
            maskPlaceholder={null}
            {...rest}
          >
            {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
              <input type="text" {...inputProps} />
            )}
          </InputMask>
        )}
        {showPassword && (
          <S.PasswordButton type="button" onClick={togglePasswordVisiblity}>
            {showPasswordStatus ? (
              <AiFillEyeInvisible size={20} />
            ) : (
              <AiFillEye size={20} />
            )}
          </S.PasswordButton>
        )}
        {RightIcon && <RightIcon size={20} />}
      </S.InputWrapper>
    </S.Container>
  )
}

export default Input
