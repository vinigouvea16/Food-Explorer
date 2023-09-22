import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    font-size: 20px;
    font-weight: 400;
  }
`
