import styled from 'styled-components'
export const InputGroup = styled.div`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.DARK.D900};
  color: ${({ theme }) => theme.COLORS.LIGHT.L500};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;

  > input {
    height: 48px;
    width: 100%;
    /* display: flex; */
    /* flex-direction: row; */
    /* align-items: center; */
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    background: transparent;
    border: 0;
    /* padding-left: 35px; */
    /* z-index: 1; */
    /* transform: translateX(-20%); */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    /* line-height: 100%; */
    outline: transparent;

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
    /* margin: 0 auto; */
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT.L400};
  }
`
