import styled from 'styled-components'

export const Container = styled.div`
  width: 251px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 12px 14px; */
  background-color: ${({ theme }) => theme.COLORS.DARK.D900};
  color: ${({ theme }) => theme.COLORS.LIGHT.L500};
  border-radius: 10px;
  @media (max-width: 576px) {
    width: 352px;
  }
  > input {
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    background: transparent;
    border: 0;
    padding-left: 14px;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT.L500};
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }
`
