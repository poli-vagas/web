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
  flex-wrap: wrap;

  & > div {
    max-width: 15rem;
  }
`

export const Clickable = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-width: 0;
  margin-top: 10px;
`

export const ClickableText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-left: 10px;
`

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-top: 10px;
`

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
`
