import styled from 'styled-components'
import { ButtonStyled } from '../../components/Button/style'
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  overflow-x: hidden;
  grid-template-areas:
    'header'
    'content'
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
    /* padding-left: 123px; */
    margin: 24px 0 48px;
    @media (max-width: 576px) {
      padding: 0;
    }
  }
`

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  /* margin: 0 130px; */
  gap: 32px;
  /* margin-right: 25px; */
  @media (max-width: 576px) {
    width: 100%;
    margin: 10px 32px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .threeInputs {
    label {
      width: 229px;
      height: 48px;
      background-color: ${({ theme }) => theme.COLORS.DARK.D900};
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      bottom: 7px;
      right: 7px;

      cursor: pointer;

      input {
        display: none;
      }
      svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.LIGHT.L400};
      }
      h4 {
        padding-left: 8px;
        color: ${({ theme }) => theme.COLORS.LIGHT.L100};
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
      @media (max-width: 576px) {
        width: 352px;
      }
    }
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      > select {
        width: 352px;
      }
    }
  }
  .threeInputs,
  .twoInputs {
    display: flex;
    gap: 32px;
    justify-content: space-between;
    @media (max-width: 576px) {
      gap: 24px;
      display: flex;
      flex-direction: column;
    }
  }
  .threeInputs span,
  .twoInputs span,
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    display: flex;
    margin-bottom: 16px;
  }
  .buttons {
    margin-bottom: 146px;
    display: flex;
    gap: 30px;
  }
  Select {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK.D900};
    color: ${({ theme }) => theme.COLORS.LIGHT.L400};
    border-radius: 10px;
    width: 364px;
    height: 48px;
    border: none;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    padding-left: 14px;
    @media (max-width: 576px) {
      width: 352px;
    }
  }

  Section {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    background: #0d1d25;
    /* padding: 4px; */
    border-radius: 8px;
    flex-wrap: wrap;
    margin: 0;
    @media (max-width: 576px) {
      width: 352px;
    }
  }

  .tags {
    display: flex;
    width: 835px;
    flex-direction: column;
    align-items: flex-start;
  }

  .buttons {
    @media (max-width: 576px) {
      width: 352px;
      margin-bottom: 53px;
    }
  }

  :is(${ButtonStyled}) {
    width: 172px;
    @media (max-width: 576px) {
      margin-bottom: 53px;
      width: 352px;
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  max-width: 1400px;
  margin: 0 auto;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    > h1 {
      @media (max-width: 576px) {
        margin-left: 32px;
      }
      color: ${({ theme }) => theme.COLORS.LIGHT.L300};
      /* margin: 0 0 32px 130px; */
      font-weight: 500;
      font-size: 32px;
      font-family: Poppins;
      margin-bottom: 30px;
    }
  }
  a {
    @media (max-width: 576px) {
      margin-left: 32px;
      padding-left: 0px;
    }
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
    /* padding-left: 124px; */
    margin: 40px 0 24px;
  }
`
