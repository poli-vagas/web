import { lighten } from 'polished'
import styled from 'styled-components'
import LogoImg from '~/assets/images/logo.png'

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
  overflow: hidden;
  width: 40%;
  height: 100vh;
  background-image: ${() => `url(${LogoImg})`};
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: contain;

  @media screen and (max-height: 790px) {
    background-size: 25rem;
  }
`

export const Right = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -20px 0 20px ${({ theme }) => lighten(0.8, theme.colors.primary)};
`
