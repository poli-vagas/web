import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
`
export const Header = styled.div`
  height: auto;
  width: 100%;
  box-sizing: content-box;
`

export const Body = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 10rem;
`

export const Back = styled.button`
  background: none;
  border: none;
  position: absolute;
  display: flex;
  align-items: center;
  top: -5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text};

  & > svg {
    margin-right: 1rem;
  }
`
