import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0em;
  text-align: left;
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  letter-spacing: 0.37px;
  text-align: left;
`
