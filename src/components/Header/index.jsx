import {Container, Logout, Brand} from './style'
import {GoSignOut} from 'react-icons/go'
import {Input} from '../Input'
import {Button} from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header(){
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  function handleLogOut(){
    navigate('/')
    logOut();
  }
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
      <Logout
      onClick={handleLogOut}
      >
        <GoSignOut />
      </Logout>
      </div>
    </Container>
  )
}