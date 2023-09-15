import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  
  body{
    background-color: ${({theme}) => theme.COLORS.DARK.D400};
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
    outline: none;
    -webkit-font-smoothing: antialiased;
  }
`;