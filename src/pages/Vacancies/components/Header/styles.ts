import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const RowFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }
`

export const ButtonAdvancedFilter = styled.button<{ active: boolean }>`
  background: ${({ theme, active }) =>
    transparentize(active ? 0.8 : 1, theme.colors.primary)};
  border: ${({ theme }) =>
    `1px solid ${transparentize(0.8, theme.colors.primary)}`};
  border-radius: 1rem;
  height: 4rem;
  padding: 0 2rem;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
  transition: all 0.2s ease;
  svg {
    margin-left: 2rem;
  }

  &:hover {
    background: ${({ theme }) => transparentize(0.8, theme.colors.primary)};
  }
`

export const AdvancedFilterGroup = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  justify-items: stretch;
  justify-self: center;
  grid-gap: 1rem;
  margin-top: 3rem;
`

export const RowFilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
