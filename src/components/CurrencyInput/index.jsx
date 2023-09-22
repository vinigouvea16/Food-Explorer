import CurrencyInput from 'react-currency-input-field'
import { Container } from './style'

export function InputCurrency({ onValueChange, value }) {
  return (
    <Container>
      <CurrencyInput
        id="currency-input"
        name="currency-input"
        placeholder="R$ 00,00"
        decimalSeparator=","
        groupSeparator="."
        prefix="R$ "
        defaultValue={''}
        decimalsLimit={4}
        onValueChange={onValueChange}
        value={value}
      />
    </Container>
  )
}
