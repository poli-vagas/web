import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 9rem;
    height: 9rem;
    object-fit: cover;
    border-radius: 1rem;
    margin: 1.5rem 0;
    margin-right: 2rem;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: normal;
    text-align: left;
    width: 21rem;
    white-space: pre-wrap;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`
