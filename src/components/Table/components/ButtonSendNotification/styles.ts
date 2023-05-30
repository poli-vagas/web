import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.button<{ status: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  border: ${({ theme, status }) =>
    `1px inset ${transparentize(
      0.85,
      status ? theme.colors.green : theme.colors.primary
    )}`};
  border-radius: 0.5rem;
  background: ${({ theme, status }) =>
    transparentize(0.85, status ? theme.colors.green : theme.colors.primary)};
  transition: all 0.2s ease;
  margin: 0 0.5rem;

  &:hover {
    background: ${({ theme, status }) =>
      transparentize(0.65, status ? theme.colors.green : theme.colors.primary)};
  }

  & > svg {
    color: ${({ theme, status }) =>
      status ? theme.colors.green : theme.colors.primary};
  }
`
