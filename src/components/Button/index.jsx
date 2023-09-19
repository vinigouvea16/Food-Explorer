import Container from './style'
import { PiReceiptBold } from 'react-icons/pi'

export function Button({
  title, 
  loading = false, 
  hasIcon = false, 
  isText = false, 
  icon: Icon, 
  price,
  ...rest
}){
  return(
  <Container 
  type='button'
  disabled={loading}
  $hasicon={hasIcon}
  {...rest}
  >
    {hasIcon && <PiReceiptBold/>}
    {title}
    {price ? ` ∙ R$ ${price}` : ''}
  </Container>
    )
}