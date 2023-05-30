import styled from 'styled-components'

export const Container = styled.div<{ size: number }>`
  position: absolute;
  top: 1rem;
  left: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${({ size }) => `${size / 1.3}px`};
    color: ${({ theme }) => theme.colors.text};
    svg {
      margin-right: 1rem;
    }
  }
`
