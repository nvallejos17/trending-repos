import { useContext } from 'react'
import {
  ReposContext,
  ReposContextType,
} from '../../contexts/ReposContext.context'
import IRepo from '../../types/IRepo.type'
import {
  RepoItemWrapper,
  RepoItemName,
  RepoItemDescription,
  RepoItemFooter,
  RepoItemStarButton,
} from './RepoItem.styled'

interface IRepoItemProps {
  repo: IRepo
}

const RepoItem = ({ repo }: IRepoItemProps) => {
  const { id, name, url, description, stars_count, starred } = repo

  const { starUnstarRepo } = useContext(ReposContext) as ReposContextType

  return (
    <RepoItemWrapper id={`repo-${id}`}>
      <RepoItemName href={url} target="_blank" rel="noreferrer">
        {name}
      </RepoItemName>
      <RepoItemDescription>{description}</RepoItemDescription>
      <RepoItemFooter>
        <small>&#9734; {stars_count}</small>
        <RepoItemStarButton onClick={() => starUnstarRepo(id)}>
          {starred ? (
            <>
              <span className="starred-icon">&#9733;</span> Starred
            </>
          ) : (
            <>&#9734; Star</>
          )}
        </RepoItemStarButton>
      </RepoItemFooter>
    </RepoItemWrapper>
  )
}

export default RepoItem
