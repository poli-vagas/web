import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  height: 9rem;
  border-radius: 1rem;
  border: ${({ theme }) => `1px solid ${lighten(0.2, theme.colors.primary)}`};
  display: flex;
  align-items: center;
`

export const IconBox = styled.div`
  width: 9.7rem;
  min-height: 100%;
  background: ${({ theme }) => lighten(0.2, theme.colors.primary)};
  border-radius: 1rem 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  border-radius: 1.5rem;
  width: 6rem;
  height: 6rem;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  padding: 1.6rem;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fontSize.sm};

  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`

export const Total = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`
