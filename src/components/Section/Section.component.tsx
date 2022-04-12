import IPrimitiveProps from '../../types/IPrimitiveProps.type'
import Container from '../Container/Container.component'
import { SectionTitle, SectionWrapper } from './Section.styled'

interface ISectionProps extends IPrimitiveProps {
  title?: string
}

const Section = ({ title, children }: ISectionProps) => (
  <SectionWrapper>
    <Container>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Container>
  </SectionWrapper>
)

export default Section
