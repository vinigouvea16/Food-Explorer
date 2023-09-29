import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  /* width: 1380px; */
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content'
    'footer';
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.COLORS.DARK.D400};
  ::-webkit-scrollbar-track {
    border: 1px solid black;
    background-color: ${({ theme }) => theme.COLORS.LIGHT.L300};
  }
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.DARK.D400};
  }
  @media (max-width: 576px) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 100%;
    overflow-x: hidden;
  }
  .mainImg {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    height: 260px;
    background: ${({ theme }) => theme.COLORS.GRADIENTS.G200};
    border-radius: 8px;
    z-index: 0;
    margin-top: 164px;
    /* position: absolute; */
    @media (max-width: 576px) {
      width: 376px;
      height: 120px;
      margin-top: 44px;
    }
  }

  hgroup h2 {
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding-bottom: 8px;
    @media (max-width: 576px) {
      font-size: 18px;
      width: 215px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
  }

  hgroup p {
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    @media (max-width: 576px) {
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: 140%;
    }
  }

  .mainImg img {
    z-index: 1;
    top: -80px;
    position: relative;
    margin-top: 32px;
    width: 632px;
    height: 406px;
    flex-shrink: 0;
    @media (max-width: 576px) {
      width: 191px;
      height: 149px;
      z-index: 1;
      top: -30px;
      left: -20px;
      position: relative;
      flex-shrink: 0;
    }
  }
`

export const Content = styled.div`
  padding: 0 123px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 46px;
  > div {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
  }
  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    padding-bottom: 23px;
    padding-top: 49px;
    @media (max-width: 576px) {
      font-family: Poppins;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      padding-top: 25px;
    }
  }
  > Section {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 46px;
    padding: 0 16px;
  }
`
