import { Container } from './style'
import { FiSearch } from "react-icons/fi";


// eslint-disable-next-line react/prop-types
export function InputLogin({
  type,
  placeholder,
  label,
  value,
  hasIcon,
  icon: Icon,
  ...rest
}){
  return(
    <Container
    $hasicon={hasIcon}
    >
    {/* {label} */}
    {hasIcon && <FiSearch size={24} />}
    <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Container>
  )
}