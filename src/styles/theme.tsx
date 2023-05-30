import React from 'react'
import { ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    text: '#252525',
    gray: '#F8F8F8',
    primary: '#250051',
    yellow: '#FBB049',
    green: '#349999'
  },
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    sm: '1.4rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.4rem',
    xx: '3.6rem',
    xxx: '4.8rem'
  }
}

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
