import styled, { css } from 'styled-components'
import Container from '../Container/Container.component'

export const FooterWrapper = styled.footer(
  ({ theme }) => css`
    padding: 1rem 0;
    background-color: ${theme.colors.bgFooter};
  `
)

export const FooterContainer = styled(Container)`
  text-align: center;
`
