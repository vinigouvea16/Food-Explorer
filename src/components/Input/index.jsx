import { FiSearch } from 'react-icons/fi'
import { Container } from './style'

// eslint-disable-next-line react/prop-types
export function Input({
  type,
  placeholder,
  label,
  value,
  hasIcon,
  icon: Icon,
  ...rest
}) {
  return (
    <Container $hasicon={hasIcon}>
      {/* {label} */}
      {hasIcon && <FiSearch size={24} />}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Container>
  )
}
