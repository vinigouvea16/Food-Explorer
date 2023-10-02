import styled from 'styled-components'
import { ButtonStyled } from '../../components/Button/style'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow-x: hidden;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  background-color: ${({ theme }) => theme.COLORS.DARK.D400};
  > main a {
    text-decoration: none;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    display: flex;
    flex-direction: row;
    align-items: center;
    /* margin: 24px 0 48px 54px; */
  }
  main {
    /* grid-area: main; */
    margin: 0 auto;
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      /* max-width: 576px; */
      /* padding: 0 56px; */
    }
    a {
      position: relative;
      margin: 24px 0 16px 115px;
      @media (max-width: 576px) {
        left: -70px;
      }
    }
  }
  @media (max-width: 576px) {
    height: 918px;
    width: 100%;
    justify-content: center;
  }
`
export const Content = styled.div`
  grid-area: content;
  padding: 0 123px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 48px;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    padding: 0 56px;
    gap: 1px;
    height: 758px;
  }
  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding-bottom: 24px;
    @media (max-width: 576px) {
      font-size: 27px;
      font-style: normal;
      font-weight: 500;
    }
  }
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    @media (max-width: 576px) {
      font-size: 16px;
      width: 316px;
    }
  }
  > section {
    max-width: 687px;
    /* height: 204px; */
    padding-top: 30px;
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 auto;
      align-items: center;
      padding: 0px 0px 50px 0;
      font-size: 14px;
    }
  }
  Button {
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    width: 162px;
    height: 48px;
    margin-left: 20px;
    @media (max-width: 576px) {
      /* padding: 12px; */
      width: 300px;
    }
  }
  @media (min-width: 576px) {
    :is(${ButtonStyled}) {
      svg {
        display: 'none';
      }
      margin-left: 0;
    }
  }
  img {
    width: 390px;
    height: 389px;
    border-radius: 100%;
    @media (max-width: 576px) {
      width: 264px;
      height: 264px;
      border-radius: 100%;
      margin: 16px auto;
    }
  }
  .divone {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .divone span {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    font-size: 25px;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }
`
