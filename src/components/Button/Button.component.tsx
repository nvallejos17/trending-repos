import IPrimitiveProps from '../../types/IPrimitiveProps.type'
import { ButtonWrapper } from './Button.styled'

type IButtonProps = IPrimitiveProps

const Button = ({ children, ...props }: IButtonProps) => (
  <ButtonWrapper {...props}>{children}</ButtonWrapper>
)

export default Button
