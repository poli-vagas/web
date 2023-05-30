import { transparentize } from 'polished'
import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface InputWrapperProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
  backgroundWhite?: boolean
  width?: string | number
}

interface ContainerProps {
  marginVertical?: string
  marginHorizontal?: string
  width?: string | number
}

const InputContainer = css<InputWrapperProps>`
  display: flex;
  align-items: center;
  padding: 0.1rem 0.8rem;
  border-radius: 1rem;
  border: ${({ theme }) =>
    `1px solid ${transparentize(0.8, theme.colors.primary)}`};
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin: 0.5rem 0;
  width: ${({ width }) => (width ? width : '100%')};

  svg {
    margin: 0 0.5rem;
  }

  &:focus {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }

  input {
    width: ${({ width }) => (width ? width : '100%')};
    height: 3.5rem;
    padding: 0 0 0 1rem;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    &::placeholder,
    &::-webkit-input-placeholder,
    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.text};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 0;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
      -webkit-box-shadow: 0;
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ width }) => (width ? width : '100%')};
  margin-top: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-bottom: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-left: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
  margin-right: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
`

export const InputWrapper = styled.div<InputWrapperProps>`
  ${InputContainer}

  ${({ backgroundWhite, theme }) =>
    backgroundWhite &&
    css`
      background: ${theme.colors.white};
    `}

  ${({ isErrored }) =>
    isErrored &&
    css`
      box-shadow: ${({ theme }) => `0px 0px 0px 1px  ${theme.colors.primary}`};
    `}
  ${({ isFocused }) =>
    isFocused &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      box-shadow: ${({ theme }) => `0px 0px 0px 1px  ${theme.colors.primary}`};
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
`

export const Error = styled(Tooltip)`
  height: 2rem;
  margin-left: 1.6rem;
  svg {
    margin: 0;
  }
  span {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.black};
    &::before {
      box-shadow: ${({ theme }) => `0px 0px 0px 1px  ${theme.colors.primary}`};
    }
  }
`

export const PasswordButton = styled.button`
  background: none;
  border: none;
  svg {
    color: ${({ theme }) => theme.colors.text};
  }
`
