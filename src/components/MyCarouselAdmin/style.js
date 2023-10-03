import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  > section {
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    overflow-x: hidden;
    @media (max-width: 576px) {
      margin-bottom: 24px;
    }
  }
  .splide__arrow {
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    width: 224px;
    height: 460px;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 6em;
    z-index: 1;
  }
  .splide__arrow--prev {
    left: 0;
    background: ${({ theme }) => theme.COLORS.GRADIENTS.G150};
    @media (max-width: 576px) {
      display: none;
    }
  }
  .splide__arrow--next {
    right: 0;
    background: ${({ theme }) => theme.COLORS.GRADIENTS.G100};
    @media (max-width: 576px) {
      display: none;
    }
  }

  .splide__arrow {
    border-radius: 0%;
    width: 140px;
  }
  .splide__arrow svg {
    path {
      fill: ${({ theme }) => theme.COLORS.LIGHT.L300};
    }
    height: 30px;
    width: 30px;
  }
  > section img {
    max-height: 176px;
  }
  section .divOne {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;

    > span {
      padding: 2px;
      font-size: 24px;
    }
    button {
      margin-left: 6px;
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
