import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 22.4rem auto;
  grid-template-rows: 15rem auto;
  grid-template-areas:
    'side header'
    'side content';
`

export const Content = styled.div`
  grid-area: content;
  width: 96%;
  padding: 0 3rem 0 5rem;
  max-width: 180rem;
`
