import { useState } from 'react'
import IRepo from '../../types/IRepo.type'
import RepoItem from '../RepoItem/RepoItem.component'
import { ReposList, ReposLoadMoreButton, ReposWrapper } from './Repos.styled'

interface IReposProps {
  repos: IRepo[]
}

const Repos = ({ repos }: IReposProps) => {
  const reposPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)
  const reposToShow = repos.slice(0, reposPerPage * currentPage)

  return (
    <ReposWrapper>
      {repos?.length > 0 ? (
        <ReposList>
          {reposToShow.map((repo: IRepo) => (
            <li key={repo.id}>
              <RepoItem repo={repo} />
            </li>
          ))}
        </ReposList>
      ) : (
        <div>There're no repositories</div>
      )}
      {repos.length > reposPerPage && reposToShow.length < repos.length && (
        <ReposLoadMoreButton onClick={() => setCurrentPage(currentPage + 1)}>
          Load {reposPerPage} more repos
        </ReposLoadMoreButton>
      )}
    </ReposWrapper>
  )
}

export default Repos
