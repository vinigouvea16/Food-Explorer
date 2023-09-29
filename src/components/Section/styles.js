import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;
  @media (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 16px;
    font-size: 14px;
    align-items: center;
  }
  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
    font-size: 20px;
    font-weight: 400;
  }
`
