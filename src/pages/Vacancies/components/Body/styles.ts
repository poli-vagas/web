import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
`

export const BodyCardsGroup = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  justify-items: stretch;
  justify-self: center;
  grid-gap: 3.2rem;

  margin-bottom: 4rem;
  & > div {
    justify-self: stretch;
  }
`
