import IRepo from '../../types/IRepo.type'
import { RepoItemWrapper } from './RepoItem.styled'

interface IRepoItemProps {
  repo: IRepo
}

const RepoItem = ({ repo }: IRepoItemProps) => {
  const { id, name, url, description, stars_count, starred } = repo

  return (
    <RepoItemWrapper id={`repo-${id}`}>
      <h3>{name}</h3>
      <small>{stars_count} stars</small>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        Visit on GitHub
      </a>
      {starred && <div style={{ backgroundColor: 'red' }}>STARRED!</div>}
    </RepoItemWrapper>
  )
}

export default RepoItem
