import { FiSearch } from 'react-icons/fi'
import { Container } from './style'

// eslint-disable-next-line react/prop-types
export function InputLogin({
  type,
  placeholder,
  label,
  value,
  hasicon,
  icon: Icon,
  ...rest
}) {
  return (
    <Container $hasicon={hasicon}>
      {/* {label} */}
      {hasicon && <FiSearch size={24} />}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Container>
  )
}
