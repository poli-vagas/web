import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.span`
  min-width: 28rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  padding: 1rem 2.4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin: 0 1rem;
  }
`

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 1rem;
`

export const Name = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 32px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Divider = styled.span`
  width: 1px;
  height: 4rem;
  background-color: ${({ theme }) => darken(0.2, theme.colors.gray)};
`

export const ButtonExit = styled.button`
  background: none;
  border: none;
  svg {
    color: ${({ theme }) => darken(0.2, theme.colors.text)};
    font-size: 2.5rem;
  }
`

export const ProfileOptions = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 28rem;
  min-height: 10rem;
  position: absolute;
  bottom: -9.8rem;
  left: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 0 0 1rem 1rem;
`

export const Option = styled.li`
  padding-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 5rem;
  box-sizing: content-box;
  color: ${({ theme }) => darken(0.2, theme.colors.text)};
  font-size: ${({ theme }) => theme.fontSize.sm};
  transition: all 0.2s ease;
  list-style: none;
  &:hover {
    color: ${({ theme }) => darken(0.2, theme.colors.primary)};
  }
`
