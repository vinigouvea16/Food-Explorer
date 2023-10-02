import { FiSearch } from 'react-icons/fi'
import { InputGroup } from './style'

// eslint-disable-next-line react/prop-types
export function Input({
  type,
  placeholder,
  value,
  hasicon,
  menuIsOpen,
  ...rest
}) {
  return (
    <InputGroup $hasicon={hasicon}>
      {/* {label} */}
      {hasicon && <FiSearch size={24} />}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </InputGroup>
  )
}
