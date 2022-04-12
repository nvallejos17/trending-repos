import { NavbarWrapper, NavbarContainer } from './Navbar.styled'

const Navbar = () => (
  <NavbarWrapper>
    <NavbarContainer>
      <a href="/">GitHub Repos</a>
      <ul>
        <li>
          <a href="/">Trending</a>
        </li>
        <li>
          <a href="/starred">Starred</a>
        </li>
      </ul>
    </NavbarContainer>
  </NavbarWrapper>
)

export default Navbar
