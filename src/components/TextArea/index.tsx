/* eslint-disable no-alert */
import React, { useCallback, useRef, useState } from 'react'
import * as S from './styles'
import { InputProps } from './types'
import { useTheme } from 'styled-components'
import { FiAlertCircle } from 'react-icons/fi'

const TextArea: React.FC<InputProps> = ({
  label,
  name,
  error,
  value,
  marginHorizontal,
  marginVertical,
  backgroundWhite,
  ...props
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)
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
    >
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <S.InputWrapper
        backgroundWhite={backgroundWhite}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        <textarea
          id={name}
          name={name}
          value={value}
          ref={inputRef}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        />

        {error && (
          <S.Error title={error}>
            <FiAlertCircle color={theme.colors.primary} size={20} />
          </S.Error>
        )}
      </S.InputWrapper>
    </S.Container>
  )
}

export default TextArea
