import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'menu header'
    'menu content'
    'menu footer';
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'content'
      'footer';
    overflow-x: hidden;
  }
  .mainImg {
    display: flex;
    align-items: center;
    height: 260px;
    background: ${({ theme }) => theme.COLORS.GRADIENTS.G200};
    border-radius: 8px;
    z-index: 0;
    margin-top: 164px;
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
      font-weight: 600;
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
      font-weight: 400;
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
  grid-area: content;
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
