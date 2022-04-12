import styled, { css } from 'styled-components'
import Container from '../Container/Container.component'

export const NavbarWrapper = styled.nav(
  ({ theme }) => css`
    padding: 1rem 0;
    position: sticky;
    background-color: ${theme.colors.bgNavbar};
  `
)

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > ul {
    list-style: none;
    display: flex;
    align-items: center;

    > li {
      margin-right: 1rem;

      :last-child {
        margin-right: 0;
      }
    }
  }
`
