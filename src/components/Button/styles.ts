import styled, { css, keyframes } from 'styled-components'
import { shade, transparentize } from 'polished'
import { ContainerProps, Sizes } from './types'

const rotateInfinite = keyframes`
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const SolidButton = css<ContainerProps>`
  background: ${({ theme, color }) => (color ? color : theme.colors.primary)};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background: ${({ theme, color }) =>
      color ? shade(0.2, color) : shade(0.2, theme.colors.primary)};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.text};
      cursor: not-allowed;

      &:hover {
        background: ${({ theme }) => shade(0.2, theme.colors.gray)};
      }
    `}
`

const OutlineButton = css<ContainerProps>`
  border: ${({ theme, color }) =>
    color ? `2px solid ${color}` : `2px solid ${theme.colors.primary}`};
  color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
  background: transparent;

  svg {
    color: ${({ theme, color }) => (color ? color : theme.colors.primary)};
  }

  &:hover {
    background: ${({ theme, color }) =>
      color
        ? transparentize(0.9, color)
        : transparentize(0.9, theme.colors.primary)};
  }
`

export const WrapperLoadgin = styled.div`
  svg {
    animation: 1s ${rotateInfinite} ease-out infinite;
  }
`

export const Container = styled.button<ContainerProps>`
  ${({ outline }) => (outline ? OutlineButton : SolidButton)};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: ${({ height }) => (height ? height : '7rem')};
  width: ${({ width }) => (width ? width : '100%')};
  border-radius: ${({ rounded }) => (rounded ? '4rem' : '1rem')};
  font-weight: bold;
  font-size: ${({ theme, size }) => {
    switch (size) {
      case Sizes.SMALL:
        return theme.fontSize.sm
      case Sizes.MEDIUM:
        return theme.fontSize.md
      case Sizes.LARGER:
        return theme.fontSize.lg
      default:
        return theme.fontSize.md
    }
  }};
  outline: none;

  margin-top: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-bottom: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-left: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
  margin-right: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};

  transition: all 0.2s;

  &:active {
    transform: scale(0.85);
  }
`
