import styled from 'styled-components'

export const Container = styled.div`
  grid-area: side;
  height: 100vh;
  width: 22.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 4.8rem;
`

export const Image = styled.img`
  width: 18rem;
  height: 18rem;
  object-fit: cover;
  margin: -5rem 0;
`

export const Menu = styled.nav`
  width: 100%;
  margin-top: 10rem;
`

export const MenuItem = styled.li<{ active: boolean }>`
  list-style: none;
  width: 100%;
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 22px;
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.text};
  background: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.white};
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    margin-left: 4rem;
    margin-right: 2rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme, active }) =>
      active ? theme.colors.white : theme.colors.text};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
