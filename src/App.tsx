import { useState, useContext } from 'react'
import { ReposContext, ReposContextType } from './contexts/ReposContext.context'
import Navbar from './components/Navbar/Navbar.component'
import Section from './components/Section/Section.component'
import Repos from './components/Repos/Repos.component'
import Footer from './components/Footer/Footer.component'

const App = () => {
  const [showStarred, setShowStarred] = useState(false)
  const { repos } = useContext(ReposContext) as ReposContextType

  return (
    <>
      <Navbar />
      <Section>
        <h2>{showStarred ? 'Starred' : 'Trending'} Repositories</h2>
        <button onClick={() => setShowStarred(!showStarred)}>
          {showStarred ? 'Show all repos' : 'Show starred repos'}
        </button>
        <Repos
          repos={showStarred ? repos.filter((repo) => repo.starred) : repos}
        />
      </Section>
      <Footer />
    </>
  )
}

export default App
