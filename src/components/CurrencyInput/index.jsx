import CurrencyInput from "react-currency-input-field"
import { Container } from "./style"

export function InputCurrency(){
  return(

    <Container>
    <CurrencyInput 
    id="currency-input"
    name="currency-input"
    placeholder="R$ 00,00"
    decimalSeparator="," 
    groupSeparator="."
    prefix = "R$ "
    defaultValue={""}
    decimalsLimit={4}
    // onValueChange={(value, name)=> console.log(value,name)}
    />
  </Container>
    )
}