import styled from 'styled-components'
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  margin-right: 108px;
  margin-top: 90px;
  max-width: 1380px;

` 

export const Form = styled.form`
  padding: 64px;
  width: auto;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: ${({theme})=> theme.COLORS.DARK.D700};
  border-radius: 16px;
  >h1{
    color: ${({theme})=> theme.COLORS.LIGHT.L100};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
  }
  >Input{
    width: auto;
  }
  >.label{
    color: ${({theme})=> theme.COLORS.LIGHT.L400};
    display:flex;
    flex-direction: column;
  }
  >.label span{
    font-family: Roboto;
    font-weight: 400;
    line-height: 100%;
    font-size: 16px;
    padding-bottom: 8px;
  }
  a{
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
    color: ${({theme})=> theme.COLORS.LIGHT.L100};
    font-family: Poppins;
  }
  >input{
   width: 100%;
  }
`
export const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h1{
    color: ${({theme})=> theme.COLORS.LIGHT.L100};
    font-size: 42px;
    font-weight: 700;
    line-height: normal;
  }
`