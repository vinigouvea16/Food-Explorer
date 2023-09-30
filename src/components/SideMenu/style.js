import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
export const Container = styled.aside`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.DARK.D400};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* display: none; */
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-area: none;
    position: absolute;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    &[data-menu-is-open='true'] {
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;
    }
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: start;
  padding: 56px 28px 24px 28px;
  height: 114px;
  display: flex;
  gap: 16px;
  flex-direction: row-reverse;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK.D600};
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT.L100};
  font-size: 21px;
  margin-bottom: 3px;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 36px 28px;
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT.L300};
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK.D1000};
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;

  > svg {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
  }
`
