import {Container, Logout, Brand} from './style'
import {GoSignOut} from 'react-icons/go'
import {Input} from '../Input'
import {Button} from '../../components/Button'

export function Header(){
  return(
    <Container>
      <div>
      <Brand />
      <Input
      placeholder="Busque por pratos ou ingredientes"
      hasIcon
      />
      <Button 
      hasIcon
      title="Pedidos (0)"
      />
      <Logout>
        <GoSignOut />
      </Logout>
      </div>
    </Container>
  )
}