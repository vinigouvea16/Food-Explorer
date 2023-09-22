import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  "footer";
  background-color:  ${({theme}) => theme.COLORS.DARK.D400};
  >main a{
    text-decoration: none;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color:  ${({theme}) => theme.COLORS.LIGHT.L300};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 24px 0 48px 115px;
  }
  main{
    margin: 0 auto;
  }
`
export const Content = styled.div`
  padding: 0 123px;
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 48px;
  
  h1{
    color:  ${({theme}) => theme.COLORS.LIGHT.L300};
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding-bottom: 24px;
  }
  p{
    color:  ${({theme}) => theme.COLORS.LIGHT.L300};
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  >section{
    max-width: 687px;
    height: 204px;
    padding-top: 30px;
  }
  Button{
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    width: 162px;
    height: 48px;
    margin-left: 20px;
  }
  .divone{
    display: flex; 
    align-items: center;
    gap: 14px;
  }
  .divone span{
    color:  ${({theme}) => theme.COLORS.LIGHT.L300};
    font-size: 25px;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%
  }
`