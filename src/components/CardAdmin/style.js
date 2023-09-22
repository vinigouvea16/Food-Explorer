import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  height: 462px;
  padding: 24px;
  width: 304px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 15px;
  background-color: ${({theme})=> theme.COLORS.DARK.D200};
  margin-right: 25px;
  >h4{
  font-size: 24px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 140%;
  }
  >span{
    padding: 2px;
    font-size: 24px;
  }
  h5{
    color: ${({theme})=> theme.COLORS.COLORS.CAKE_200};
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    line-height: 160%;
    align-items: center;
  }
`


export const Pencil = styled.button`
  width: 24px;
  height: 22px;
  position: absolute;
  right: 18px;
  top: 16px;
  background-color: transparent;
  border: none;
  
  &:hover{
    scale: 1.2;
  >svg path{
    stroke: ${({theme})=> theme.COLORS.COLORS.MINT_100};
  }
  }
`
