import IRepo from '../../types/IRepo.type'
import RepoItem from '../RepoItem/RepoItem.component'
import { ReposWrapper } from './Repos.styled'
import {
  ReposContext,
  ReposContextType,
} from '../../contexts/ReposContext.context'
import { useContext } from 'react'

interface IReposProps {
  repos: IRepo[]
}

const Repos = ({ repos }: IReposProps) => {
  const { starUnstarRepo } = useContext(ReposContext) as ReposContextType

  return (
    <ReposWrapper>
      {repos?.length > 0 ? (
        repos.map((repo: IRepo) => (
          <li key={repo.id} onClick={() => starUnstarRepo(repo.id)}>
            <RepoItem repo={repo} />
          </li>
        ))
      ) : (
        <div>Ops! There're no repositories</div>
      )}
    </ReposWrapper>
  )
}

export default Repos
