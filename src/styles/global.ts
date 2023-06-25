import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;

  }
  *:focus{
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root{
    width: 100%;
    height: 100%;
    text-rendering: optimizelegibility;
    background-color: ${({ theme }) => theme.colors.white};
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font-family: 'Source Sans Pro', sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }

  ${media.lessThan('medium')`
    html {
      font-size: 50%;
    }
  `}

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1f8;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #250051;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #250051;
  }
  ::-webkit-scrollbar-track {
    background: #fafbfb;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #fafbfb;
  }
  ::-webkit-scrollbar-track:active {
    background: #e1e1f8;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.2s ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateX(0px);
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateX(100px);
  }


`

export default GlobalStyles
