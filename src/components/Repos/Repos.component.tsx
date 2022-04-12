import IRepo from '../../types/IRepo.type'
import RepoItem from '../RepoItem/RepoItem.component'
import { ReposWrapper } from './Repos.styled'

interface IReposProps {
  repos: IRepo[]
}

const Repos = ({ repos }: IReposProps) => {
  return (
    <ReposWrapper>
      {repos?.length > 0 ? (
        repos.map((repo: IRepo) => (
          <li key={repo.id}>
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
