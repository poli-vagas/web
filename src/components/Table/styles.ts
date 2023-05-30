import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border: ${({ theme }) =>
    `1px solid ${transparentize(0.8, theme.colors.primary)}`};
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.gray};
`

export const TableContainer = styled.div`
  width: 100%;
  max-width: 110rem;
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    width: 68rem;
    max-width: 68rem;
  }

  @media screen and (max-width: 1180px) {
    max-width: 80rem;
  }

  @media screen and (max-width: 1280px) {
    max-width: 100rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: 115rem;
  }

  @media screen and (min-width: 1600px) {
    max-width: 132rem;
  }

  @media screen and (min-width: 1720px) {
    max-width: 100%;
  }
`

export const Table = styled.table`
  display: block;
  width: 100%;
  overflow: scroll;
  display: block;
  z-index: 1;
  width: 100%;
  .tooltipBoundary {
    /* position: relative; */
    background: red;
  }
`

export const Thead = styled.thead<{ floatLastColumn: boolean }>`
  width: 100%;
  & > tr {
    width: 100%;
    height: 6.8rem;

    th {
      color: ${({ theme }) => transparentize(0.4, theme.colors.text)};
      font-size: ${({ theme }) => theme.fontSize.xs};
      font-weight: 600;
      padding: 0 2rem;
      min-width: 12rem;
      border-bottom: ${({ theme }) =>
        `1px solid ${transparentize(0.8, theme.colors.primary)}`};
    }

    th:first-child {
      padding-left: 4.4rem;
      white-space: nowrap;
    }

    th:last-child {
      padding-right: 4.4rem;
      white-space: nowrap;

      ${({ floatLastColumn }) =>
        floatLastColumn &&
        css`
          position: sticky;
          right: 0;
          z-index: 2;
          background: ${({ theme }) => theme.colors.gray};
        `}
    }
  }
`

export const Tbody = styled.tbody<{ floatLastColumn: boolean }>`
  width: 100%;
  & > tr {
    width: 100%;
    height: 8rem;

    td {
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: normal;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 2rem;
    }

    td:first-child {
      padding-left: 4.4rem;
      text-align: center;
      white-space: nowrap;
    }

    td:last-child {
      padding-right: 4.4rem;
      white-space: nowrap;

      ${({ floatLastColumn }) =>
        floatLastColumn &&
        css`
          position: sticky;
          right: 0;
          z-index: 2;
          background: ${({ theme }) => theme.colors.gray};
        `}
    }
  }
`

export const Tfoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  padding-top: 5rem;
  border: none;
  background: ${({ theme }) => theme.colors.white};
`

export const TotalPage = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 500;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const WrapperPaginate = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
  }
  .break-me {
    cursor: default;
    padding: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.gray};

    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;
  }
  .page {
    padding: 0;
    margin: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.gray};

    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 400;

    transition: all 0.2s ease;
    cursor: pointer;

    & > a {
      padding: 1rem 1.8rem;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0.5rem;
    }
  }

  .active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    width: 3rem;
    height: 3rem;
  }

  .control {
    padding: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.gray};
    margin: 0 1.7rem;

    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 600;

    transition: all 0.2s ease;
    cursor: pointer;

    svg {
      padding-top: 5px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 0.5rem;
    }
  }
`

export const MoneyColumn = styled.span`
  display: flex;
  align-items: center;

  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: normal;
`

export const MoneyImage = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  margin-right: 0.5rem;
`

export const ActionsColumn = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`

export const ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Cell = styled.div``
