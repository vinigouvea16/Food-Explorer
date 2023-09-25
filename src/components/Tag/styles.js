import styled from 'styled-components'

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.LIGHT.L100};
  background-color: ${({ theme }) => theme.COLORS.DARK.D1000};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`
