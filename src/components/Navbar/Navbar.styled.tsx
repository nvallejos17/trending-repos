import styled from 'styled-components'
import Container from '../Container/Container.component'

export const NavbarWrapper = styled.nav`
  padding: 1rem 0;
  position: sticky;
  border-bottom: 1px solid lightgrey;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > ul {
    list-style: none;
    display: flex;
    align-items: center;

    > li {
      margin: 0 0.5rem;
    }
  }
`
