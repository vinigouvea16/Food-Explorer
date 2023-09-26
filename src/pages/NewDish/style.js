import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
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
    padding-left: 123px;
    margin: 24px 0 48px;
  }
`

export const Form = styled.form`
  display: flex;
  max-width: 1318px;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 130px;
  gap: 32px;
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
    }
  }
  .threeInputs,
  .twoInputs {
    display: flex;
    gap: 32px;
    justify-content: space-between;
  }
  .threeInputs span,
  .twoInputs span,
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    display: flex;
    margin-bottom: 16px;
  }
  > Button {
    width: 172px;
    height: 48px;
    margin-bottom: 146px;
    display: flex;
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
  }
  .tags {
    display: flex;
    width: 835px;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Content = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    > h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT.L300};
      margin: 0 0 32px 130px;
      font-weight: 500;
      font-size: 32px;
      font-family: Poppins;
    }
  }
  a {
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
    padding-left: 124px;
    margin: 40px 0 24px;
  }
`
