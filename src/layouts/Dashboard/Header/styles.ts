import styled from 'styled-components'

export const Container = styled.div`
  grid-area: header;
  width: 96%;
  max-width: 180rem;
  height: 15rem;
  padding: 0 3rem 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xx};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.primary};
`
