import styled from 'styled-components'

interface WrapperProps {
  marginVertical?: string
  marginHorizontal?: string
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  margin-top: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-bottom: ${({ marginVertical }) =>
    marginVertical ? marginVertical : 'none'};
  margin-left: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
  margin-right: ${({ marginHorizontal }) =>
    marginHorizontal ? marginHorizontal : 'none'};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `0.5px solid ${theme.colors.gray}`};
  border-radius: 1rem;
  width: 30rem;
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  margin-bottom: 0.8rem;
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  border: ${({ theme }) => `0.5px solid ${theme.colors.gray}`};
  border-radius: 0.5rem;
  padding: 0.8rem 1.6rem;
  background: ${({ theme }) => theme.colors.white};
  width: 13.8rem;
  height: 4.8rem;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 600;
  }

  input {
    width: 8rem;
    margin-left: 1rem;
    border: none;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 400;
    cursor: pointer;
  }
`
