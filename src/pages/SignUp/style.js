import styled from 'styled-components'
export const Container = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  margin-right: 108px;
  margin-top: 90px;
  max-width: 1380px;

` 

export const Form = styled.form`
  padding: 64px;
  width: 476px;
  height: 621px;
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
   margin-top: 20px
  }
`
export const Background = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  >svg{
  margin-right: 19px;
}
  h1{
    color: ${({theme})=> theme.COLORS.LIGHT.L100};
    font-size: 42px;
    font-weight: 700;
    line-height: normal;
  }
`