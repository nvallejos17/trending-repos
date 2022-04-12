import styled from 'styled-components'
import Button from '../Button/Button.component'

export const ReposWrapper = styled.div``

export const ReposList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(320px), 1fr));
  gap: 2rem;

  @media (max-width: 320px) {
    grid-template-columns: none;
  }
`

export const ReposLoadMoreButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
`
