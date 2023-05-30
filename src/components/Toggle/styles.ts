import styled from 'styled-components'

interface ContainerProps {
  marginVertical?: string
  marginHorizontal?: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-bottom: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-left: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
  margin-right: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
`
export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
  margin: 0.8rem 0;

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
    margin-left: 2rem;
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
`
