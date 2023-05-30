import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border: ${({ theme }) =>
    `1px inset ${transparentize(0.85, theme.colors.primary)}`};
  border-radius: 0.5rem;
  background: ${({ theme }) => transparentize(0.85, theme.colors.primary)};
  transition: all 0.2s ease;
  margin: 0 0.5rem;

  &:hover {
    background: ${({ theme }) => transparentize(0.65, theme.colors.primary)};
  }

  & > svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`
