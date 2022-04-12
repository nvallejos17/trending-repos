import { ButtonWrapper } from './Button.styled'
import IPrimitiveProps from '../../types/IPrimitiveProps.type'

type IButtonProps = IPrimitiveProps

const Button = ({ children, ...props }: IButtonProps) => (
  <ButtonWrapper {...props}>{children}</ButtonWrapper>
)

export default Button
