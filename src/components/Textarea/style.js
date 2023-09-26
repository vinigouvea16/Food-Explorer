import styled from 'styled-components'

export const Container = styled.textarea`
  width: 1120px;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.DARK.D900};
  color: ${({ theme }) => theme.COLORS.LIGHT.L100};
  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT.L500};
  }
`
