import React from 'react'
import { Theme } from '~/styles/theme'
import GlobalStyles from '~/styles/global'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyles />
        <ToastContainer />
        <Routes />
      </Theme>
    </BrowserRouter>
  )
}

export default App
