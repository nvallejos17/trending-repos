import IPrimitiveProps from '../../types/IPrimitiveProps.type'
import { ContainerWrapper } from './Container.styled'

type IContainerProps = IPrimitiveProps

const Container = ({ children, ...props }: IContainerProps) => (
  <ContainerWrapper {...props}>{children}</ContainerWrapper>
)

export default Container
