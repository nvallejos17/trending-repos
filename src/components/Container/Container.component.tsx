import { ContainerWrapper } from './Container.styled'

const Container = ({ children, ...props }: any) => (
  <ContainerWrapper {...props}>{children}</ContainerWrapper>
)

export default Container
