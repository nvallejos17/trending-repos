import styled, { css } from 'styled-components'
import Button from '../Button/Button.component'

export const RepoItemWrapper = styled.article(
  ({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    color: ${theme.colors.fontRepoItem};
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.borderRepoItem};
  `
)

export const RepoItemName = styled.a(
  ({ theme }) => css`
    margin-bottom: 0.5rem;
    align-self: flex-start;
    color: ${theme.colors.fontRepoName};

    :hover {
      color: ${theme.colors.fontRepoNameHover};
    }
  `
)

export const RepoItemDescription = styled.p`
  flex: 1;
  margin-bottom: 1rem;
`

export const RepoItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > small {
    flex: 1;
  }
`

export const RepoItemStarButton = styled(Button)(
  ({ theme }) => css`
    .starred-icon {
      color: ${theme.colors.fontStarredIcon} !important;
    }
  `
)
