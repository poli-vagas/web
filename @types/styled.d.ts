import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      text: string
      gray: string
      primary: string
      yellow: string
      green: string
    }
    fontSize: {
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xx: string
      xxx: string
    }
  }
}
