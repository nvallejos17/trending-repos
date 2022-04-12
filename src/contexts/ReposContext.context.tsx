import { createContext, useState, useEffect } from 'react'
import moment from 'moment'
import IRepo from '../types/IRepo.type'
import useLocalStorageState from '../hooks/useLocalStorageState.hook'

const oneWeekAgo = moment().subtract(1, 'week').format('YYYY-MM-DD')
const API_URL = `https://api.github.com/search/repositories?q=created:>${oneWeekAgo}&sort=stars&order=desc`

export type ReposContextType = {
  repos: IRepo[]
  starUnstarRepo: (repoId: number) => void
}

export const ReposContext = createContext<ReposContextType | null>(null)

const ReposContextProvider = ({ children }: any) => {
  const [repos, setRepos] = useState<IRepo[]>([])
  const [starredRepos, setStarredRepos] = useLocalStorageState(
    'starredRepos',
    []
  )

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const minifiedRepos = data.items?.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          stars_count: repo.stargazers_count,
          starred: starredRepos.includes(repo.id),
        }))

        setRepos(minifiedRepos)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const starUnstarRepo = (repoId: number) => {
    const udpatedRepos = repos.map((repo) =>
      repo.id === repoId
        ? {
            ...repo,
            stars_count: repo.starred
              ? repo.stars_count - 1
              : repo.stars_count + 1,
            starred: !repo.starred,
          }
        : repo
    )

    setRepos(udpatedRepos)
    setStarredRepos(
      starredRepos.includes(repoId)
        ? starredRepos.filter((id: number) => id !== repoId)
        : [...starredRepos, repoId]
    )
  }

  return (
    <ReposContext.Provider
      value={{
        repos,
        starUnstarRepo,
      }}
    >
      {children}
    </ReposContext.Provider>
  )
}

export default ReposContextProvider
