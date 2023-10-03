import styled from 'styled-components'

export const Container = styled.div`
  width: 348px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.DARK.D900};
  color: ${({ theme }) => theme.COLORS.LIGHT.L500};

  border-radius: 10px;

  > input {
    height: 48px;
    width: 344px;
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

  > svg {
    margin-left: 99px;
    margin-right: 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT.L400};
  }
`
