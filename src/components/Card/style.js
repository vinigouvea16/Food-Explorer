import styled from 'styled-components'
import { ButtonStyled } from '../Button/style'
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
  background-color: ${({ theme }) => theme.COLORS.DARK.D200};
  margin-right: 25px;

  @media (max-width: 576px) {
    display: flex;
    width: 210px;
    height: 292px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
    margin-right: 16px;
  }
  .counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    gap: 14px;
  }
  .divOne {
    ${ButtonStyled} {
      width: 92px;
    }
    @media (max-width: 576px) {
      display: flex;
      flex-direction: column !important;
      /* width: 100%; */
      ${ButtonStyled} {
        width: 162px;
        height: 32px;
        border-radius: 5px;
      }
    }
  }
  > p {
    overflow: hidden;
    text-align: center;
    @media (max-width: 576px) {
      display: none;
    }
  }
  > h4 {
    font-size: 24px;
    font-family: Poppins;
    font-weight: 700;
    line-height: 140%;
    @media (max-width: 576px) {
      font-size: 14px;
      font-weight: 500px;
      font-style: normal;
      line-height: 24px;
    }
  }
  > span {
    padding: 2px;
    font-size: 24px;
  }
  h5 {
    color: ${({ theme }) => theme.COLORS.COLORS.CAKE_200};
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    line-height: 160%;
    align-items: center;
    @media (max-width: 576px) {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }
  .ewGMkS > section img {
    height: 88px;
  }
  img {
    border-radius: 100%;
    width: 176px;
    /* height: 176px; */
    @media (max-width: 576px) {
      width: 88px;
      height: 88px;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
  }
`

export const Heart = styled.button`
  width: 24px;
  height: 22px;
  position: absolute;
  right: 18px;
  top: 16px;
  background-color: transparent;
  border: none;

  &:hover {
    scale: 1.2;
    > svg path {
      stroke: ${({ theme }) => theme.COLORS.COLORS.TOMATO_200};
    }
  }
`
