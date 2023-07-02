import styled from 'styled-components'

export const Container = styled.div`
  width: 65rem;
  display: flex;
  flex-direction: column;
  padding: 4.7rem 7rem;

  & > h3 {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: bold;
    max-width: 25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4rem;
  & > h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    max-width: 25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;

  & > svg {
    margin-right: 1rem;
  }
`
export const Body = styled.div``

export const WrapperInput = styled.div`
  margin: 2rem 0;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 4rem;
`
