import styled from 'styled-components'
import LogoImg from '~/assets/images/logo.png'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
  width: 100%;
  min-height: 100%;
`
export const Left = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
`

export const Right = styled.div`
  position: relative;
  overflow: hidden;
  width: 55%;
  height: 100vh;
  background-image: ${() => `url(${LogoImg})`};
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: contain;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto 15%;
  width: 100%;
`

export const ForgotLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0em;
  text-align: right;
  transition: all 0.2s ease;
  margin-bottom: 5rem;

  &:hover {
    font-weight: 700;
  }
`
