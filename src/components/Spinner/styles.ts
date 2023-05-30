import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
    transform:rotate(0deg);
}
to {
    transform:rotate(360deg);
  }
`

export const Container = styled.div`
  animation: 1s ${rotate} infinite linear;
`
