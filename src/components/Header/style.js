import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 104px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px 123px;
  gap: 32px;
  background-color: ${({theme}) => theme.COLORS.DARK.D600};
  
  >Button{
    max-width: 216px;
    height: 56px;
  }
  div{
  max-width: 1380px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px 123px;
  gap: 32px;
  }
`
export const Logout = styled.button`
  border: none;
  background: none;
  >svg {
    color: ${({theme}) => theme.COLORS.LIGHT.L100};
    font-size: 32px;
  }
`
export const Brand = styled.div`
  color: ${({theme})=> theme.COLORS.LIGHT.L100};
  background-image: url("/assets/logo.png");
  background-repeat: no-repeat;
  width: 197px;
  height: 30px;
  margin-right: 32px;
`