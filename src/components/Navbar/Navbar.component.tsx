import { NavbarWrapper, NavbarContainer } from './Navbar.styled'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <NavbarWrapper>
    <NavbarContainer>
      <Link to="/">GitHub Repos</Link>
      <ul>
        <li>
          <Link to="/">Trending</Link>
        </li>
        <li>
          <Link to="/starred">Starred</Link>
        </li>
      </ul>
    </NavbarContainer>
  </NavbarWrapper>
)

export default Navbar
