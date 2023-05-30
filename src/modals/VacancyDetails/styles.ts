import styled from 'styled-components'

export const Container = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  padding: 4.7rem 2.8rem;

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

export const Image = styled.img`
  width: 33rem;
  height: 33rem;
  object-fit: cover;
  border-radius: 2rem;
  margin: 2rem 0 3rem;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    max-width: 15rem;
  }
`
