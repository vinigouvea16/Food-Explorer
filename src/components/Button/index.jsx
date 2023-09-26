import { PiReceiptBold } from 'react-icons/pi'
import Container from './style'

export function Button({
  title,
  loading = false,
  hasIcon = false,
  isText = false,
  icon: Icon,
  price,
  onClick,
  ...rest
}) {
  const handleClick = () => {
    if (!rest.disabled) {
      onClick()
    } else {
      alert('Por favor complete todos os campos antes de atualizar o prato')
    }
  }
  return (
    <Container
      type="button"
      disabled={loading}
      $hasicon={hasIcon}
      onClick={handleClick}
      {...rest}
    >
      {hasIcon && <PiReceiptBold />}
      {title}
      {price ? ` ∙ R$ ${price}` : ''}
    </Container>
  )
}
