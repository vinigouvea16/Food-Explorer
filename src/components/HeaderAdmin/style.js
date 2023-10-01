import styled from 'styled-components'
import { ButtonStyled } from '../Button/style'
import { InputGroup } from '../Input/style'

export const Container = styled.header`
  grid-area: header;
  height: 104px;
  /* max-width: 1380px; */
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px 123px;
  gap: 32px;
  background-color: ${({ theme }) => theme.COLORS.DARK.D600};
  ${ButtonStyled} {
    max-width: 216px;
    height: 56px;
  }
  :is(${ButtonStyled}, ${InputGroup}) {
    @media (max-width: 576px) {
      display: none;
    }
  }
  @media (max-width: 576px) {
    height: 114px;
    width: 100%;
    flex-shrink: 0;
    padding: 0 28px;
    margin: 0;
    z-index: 0;
    display: flex;
    gap: 20px;
  }
`
export const Logout = styled.button`
  border: none;
  background: none;
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    font-size: 32px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`
export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT.L100};
  background-image: url('/assets/logoadmin.png');
  background-repeat: no-repeat;
  width: 197px;
  height: 38px;
  cursor: pointer;
  flex-shrink: 0;
`
export const Order = styled.button`
  all: unset;

  display: block;
  position: relative;

  border: none;
  background: none;

  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.COLORS.COLORS.CAKE_200};
  }

  @media (min-width: 578px) {
    display: none;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    font-size: 32px;
  }

  > span {
    position: absolute;
    right: -0.5rem;
    top: -0.25rem;

    display: grid;
    place-items: center;

    width: 1.25rem;
    height: 1.25rem;

    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    font-size: 0.75rem;

    border-radius: 999999px;
    background-color: ${({ theme }) => theme.COLORS.COLORS.TOMATO_300};

    pointer-events: none;
  }
`
export const Menu = styled.button`
  all: unset;

  display: block;
  position: relative;

  border: none;
  background: none;

  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.COLORS.COLORS.CAKE_200};
  }

  @media (min-width: 578px) {
    display: none;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    font-size: 32px;
  }

  > span {
    position: absolute;
    right: -0.5rem;
    top: -0.25rem;

    display: grid;
    place-items: center;

    width: 1.25rem;
    height: 1.25rem;

    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    font-size: 0.75rem;

    border-radius: 999999px;
    background-color: ${({ theme }) => theme.COLORS.COLORS.TOMATO_300};

    pointer-events: none;
  }
`
