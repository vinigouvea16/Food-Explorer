import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
   ::-webkit-scrollbar {
    width: 3px;
  }
  
  ::-webkit-scrollbar-track {
    background-color:${({ theme }) => theme.COLORS.COLORS.D400};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.COLORS.CAKE_100};
  }
  body{
    background-color: ${({ theme }) => theme.COLORS.DARK.D400};
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
    outline: none;
    -webkit-font-smoothing: antialiased;
  }
`
