import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

import Details from './pages/Details'

import Dish from './pages/Dish'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import NewDish from './pages/NewDish'
import DishEdit from './pages/DishEdit'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <Details />
    {/* <Dish /> */}
    {/* <NewDish /> */}
    {/* <DishEdit /> */}
    {/* <LogIn /> */}
    {/* <SignUp /> */}
    </ThemeProvider>
  </React.StrictMode>,
)

import Routes from './routes'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode >
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//     <Routes />
//     </ThemeProvider>
//   </React.StrictMode>,
// )