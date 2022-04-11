import Container from '../Container/Container.component'
import { SectionWrapper } from './Section.styled'

const Section = ({ children }: any) => (
  <SectionWrapper>
    <Container>{children}</Container>
  </SectionWrapper>
)

export default Section
