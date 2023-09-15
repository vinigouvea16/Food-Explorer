import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  "footer";
  overflow-y: scroll;
  background-color:  ${({theme}) => theme.COLORS.DARK.D400};
  ::-webkit-scrollbar-track
{
	border: 1px solid black;
	background-color: ${({theme}) => theme.COLORS.LIGHT.L300};
}
::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: ${({theme}) => theme.COLORS.DARK.D400};
}


  .mainImg{
    display:flex;
    align-items: center;
    justify-content: center;
    height: 260px;
    width: 1120px;
    background: ${({theme})=> theme.COLORS.GRADIENTS.G200};
    border-radius: 8px;
    z-index: 0;
    margin-top: 164px;
    /* position: absolute; */
  }

  hgroup h2{
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding-bottom: 8px;
  }

  hgroup p{
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  .mainImg img{
    z-index: 1;
    top: -80px;
    position: relative;
    margin-top: 32px;
    width: 632px;
    height: 406px;
    flex-shrink: 0;
  }

  hgroup{
    /* background-color: ${({theme})=> theme.COLORS.COLORS.TOMATO_400}; */
  }
`
export const Content = styled.div`
  padding: 0 123px;
  max-width: 1380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 46px;
  >div{
    width: 100%;
    color:  ${({theme}) => theme.COLORS.LIGHT.L300};
  }
  h1{
    color:  ${({theme}) => theme.COLORS.LIGHT.L300};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding-bottom: 23px;
    padding-top: 49px;
  }
`