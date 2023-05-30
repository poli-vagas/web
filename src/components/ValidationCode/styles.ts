import { darken } from 'polished'
import styled from 'styled-components'

interface CodeProps {
  error?: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Code = styled.input.attrs(() => ({
  type: 'text',
  maxLength: 1,
  minLength: 1
}))<CodeProps>`
  background: ${({ theme }) => darken(0.03, theme.colors.gray)};
  border: ${({ error }) => (error ? `1px solid red` : 'none')};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  width: 7rem;
  height: 7rem;
  margin: 0 2rem;
  caret-color: ${({ theme }) => theme.colors.primary};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }
`
