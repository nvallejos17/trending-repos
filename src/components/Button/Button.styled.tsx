import styled, { css } from 'styled-components'

export const ButtonWrapper = styled.button(
  ({ theme }) => css`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    color: ${theme.colors.fontButton};
    border: 1px solid ${theme.colors.borderButton};
    background-color: ${theme.colors.bgButton};

    :hover {
      cursor: pointer;
      border-color: ${theme.colors.borderButtonHover};
      background-color: ${theme.colors.bgButtonHover};
    }
  `
)
