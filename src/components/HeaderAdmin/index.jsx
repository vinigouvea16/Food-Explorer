import {Container, Logout, Brand} from './style'
import {GoSignOut} from 'react-icons/go'
import {Input} from '../Input'
import {Button} from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function HeaderAdmin(
  {
 }
){
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  function handleNewDish(id){
    navigate(`/new`)
  }
  function handleLogOut(){
    navigate('/')
    logOut();
  }

  function handleHome(){
    navigate('/')
  }
  return(
    <Container>
      <div>
      <Brand 
      onClick={handleHome}
      />
      <Input
      placeholder="Busque por pratos ou ingredientes"
      hasIcon
      />
      <Button 
      onClick={handleNewDish}
      title="Novo Prato"
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