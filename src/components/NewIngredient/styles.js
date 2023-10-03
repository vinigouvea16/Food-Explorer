import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.LIGHT.L600};
  color: ${({ theme }) => theme.COLORS.LIGHT.L500};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT.L500}` : 'none'};

  margin: 8px;
  border-radius: 8px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT.L100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT.L500};
  }

  > input {
    margin-left: 16px;
    width: fit-content;
    padding: 8px;
    color: ${({ theme }) => theme.COLORS.LIGHT.L400};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT.L500};
    }
  }
`
