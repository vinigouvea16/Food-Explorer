import { PiReceiptBold } from 'react-icons/pi'
import { ButtonStyled } from './style'

export function Button({
  title,
  loading = false,
  hasicon = false,
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
    <ButtonStyled
      type="button"
      disabled={loading}
      $hasicon={hasicon}
      onClick={handleClick}
      {...rest}
    >
      {hasicon && <PiReceiptBold />}
      {title}
      {price ? ` ∙ R$ ${price}` : ''}
    </ButtonStyled>
  )
}
