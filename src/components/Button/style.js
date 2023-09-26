import styled from 'styled-components'

const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, $isText }) =>
    !$isText ? theme.COLORS.COLORS.TOMATO_100 : theme.COLORS.COLORS.TOMATO_400};
  color: ${({ theme }) => theme.COLORS.LIGHT.L100};
  height: 56px;
  border: none;
  /* padding-inline: ${({ $isText }) => (!$isText ? '16px' : 'none')}; */
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ $isText }) => ($isText ? '230px' : 'none')};

  > svg {
    margin-right: 8px;
    font-size: 32px;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.DARK.D900};
  }

  &:hover {
    background-color: ${({ theme, $isText }) =>
      $isText ? theme.COLORS.COLORS.TOMATO_200 : theme.COLORS.COLORS.MINT_100};
  }
`
export default Container
