import { useContext } from 'react'
import { ReposContext, ReposContextType } from './contexts/ReposContext.context'
import Section from './components/Section/Section.component'
import Repos from './components/Repos/Repos.component'
import Footer from './components/Footer/Footer.component'
import Navbar from './components/Navbar/Navbar.component'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const { repos } = useContext(ReposContext) as ReposContextType

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Section title="Trending">
              <Repos repos={repos} />
            </Section>
          }
        />
        <Route
          path="/starred"
          element={
            <Section title="Starred">
              <Repos repos={repos.filter((repo) => repo.starred)} />
            </Section>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
