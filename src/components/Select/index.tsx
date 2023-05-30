import React, { useCallback, useRef, useState } from 'react'
import { InputProps } from './types'
import * as S from './styles'
import { FiAlertCircle } from 'react-icons/fi'
import { useTheme } from 'styled-components'

const Select: React.FC<InputProps> = ({
  label,
  span,
  required,
  disabled,
  id,
  name,
  placeholder,
  options,
  error,
  value,
  onChange,
  marginVertical,
  marginHorizontal,
  backgroundWhite,
  ...props
}) => {
  const inputRef = useRef<HTMLSelectElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const theme = useTheme()

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <S.Container
      marginHorizontal={marginHorizontal}
      marginVertical={marginVertical}
      width={props?.width}
    >
      {label && (
        <S.Label>
          {label}{' '}
          {error && (
            <S.Error title={error}>
              <FiAlertCircle color={theme.colors.primary} size={20} />
            </S.Error>
          )}
        </S.Label>
      )}

      <S.InputWrapper
        backgroundWhite={backgroundWhite}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        width={props?.width}
      >
        <select
          ref={inputRef}
          required={required}
          id={id}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        >
          <option value="">{placeholder || 'Selecione um item'}</option>
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </S.InputWrapper>
      {span && <S.Span>{span}</S.Span>}
    </S.Container>
  )
}

export default Select
