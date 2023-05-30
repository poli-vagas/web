import { transparentize } from 'polished'
import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface InputWrapperProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
  backgroundWhite?: boolean
}

interface ContainerProps {
  marginVertical?: string
  marginHorizontal?: string
}

const InputContainer = css`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin: 0.5rem 0;
  width: 100%;
  border: ${({ theme }) =>
    `1px solid ${transparentize(0.8, theme.colors.primary)}`};
  padding: 0 2rem;

  svg {
    margin: 0 1rem;
  }

  &:focus {
    border: ${({ theme }) =>
      `1px solid ${transparentize(0.8, theme.colors.primary)}`};
  }

  select {
    width: 100%;
    height: 3.5rem;
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
  width: 100%;
  margin-top: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-bottom: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-left: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
  margin-right: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};

  span {
  }
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

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
`

export const Label = styled.div`
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
