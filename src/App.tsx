import { useContext } from 'react'
import { ReposContext, ReposContextType } from './contexts/ReposContext.context'
import Section from './components/Section/Section.component'
import Repos from './components/Repos/Repos.component'
import Footer from './components/Footer/Footer.component'
import Navbar from './components/Navbar/Navbar.component'

const App = () => {
  const { repos } = useContext(ReposContext) as ReposContextType

  return (
    <>
      <Navbar />
      <Section title="Trending">
        <Repos repos={repos} />
      </Section>
      <Footer />
    </>
  )
}

export default App
