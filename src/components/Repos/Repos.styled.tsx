import styled from 'styled-components'

export const ReposWrapper = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(320px), 1fr));
  gap: 2rem;

  @media (max-width: 320px) {
    grid-template-columns: none;
  }
`
