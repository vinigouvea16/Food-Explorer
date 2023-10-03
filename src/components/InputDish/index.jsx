import { FiSearch } from 'react-icons/fi'
import { Container } from './style'

// eslint-disable-next-line react/prop-types
export function InputDish({ type, placeholder, value, hasicon, ...rest }) {
  return (
    <Container $hasicon={hasicon}>
      {hasicon && <FiSearch size={24} />}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Container>
  )
}
