import styled from 'styled-components'

export const Container = styled.div`
  grid-area: footer;
  width: 100%;
  height: 77px;
  background-color: ${({ theme }) => theme.COLORS.DARK.D600};
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 24px 123px;
  }
  @media (max-width: 576px) {
    padding: 24px 28px;
    margin: 0;
    div {
      padding: 24px 0px;
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 3px;
    }
    #logo {
      width: 148px;
    }
    #copywrite {
      width: 222px;
    }
  }
`
