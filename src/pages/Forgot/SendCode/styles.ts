import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 3.4rem;
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 400;
  line-height: 2.2rem;
  text-align: center;
  max-width: 23rem;
  padding: 3.8rem 0 5.4rem;
`

export const CodeError = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  margin-top: 1rem;
`
