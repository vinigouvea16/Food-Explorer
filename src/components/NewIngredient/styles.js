import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, $isNew})=> $isNew ? "transparent" : theme.COLORS.LIGHT.L600};
  color: ${({theme})=> theme.COLORS.LIGHT.L500};

  border: ${({theme, $isNew}) => $isNew ? `2px dashed ${theme.COLORS.LIGHT.L500}` : "none"};
 
  margin: 8px;
  border-radius: 10px;
  padding-right: 16px;

  >button {
    border: none;
    background: none;
  }
  
    .button-delete{
      color: ${({theme})=> theme.COLORS.LIGHT.L500};
    }
  
    .button-add{
      color: ${({theme})=> theme.COLORS.LIGHT.L500};
    }
  
  >input{
    height: 56px;

    padding: 12px;
    color: ${({theme})=> theme.COLORS.LIGHT.L400};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({theme})=> theme.COLORS.LIGHT.L500};
    }
  }
`;