import styled from 'styled-components';

export const Container = styled.div`
  grid-area: footer;
  width: 100%;
  height: 77px;
  padding: 24px 123px;
  background-color: ${({theme}) => theme.COLORS.DARK.D600};
  display: flex;
  align-items: center; 
  justify-content: space-between;

  div{
  max-width: 1380px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 24px 123px;
  gap: 700px;
  }
  /* >:nth-child(2){
    padding-left: 8px;
  } */
`