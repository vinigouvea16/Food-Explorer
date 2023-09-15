import {InputLogin} from '../../components/InputLogin'
import {Button} from '../../components/Button'
import {Container, Form, Background} from './style'

function LogIn(){
  return(
    <Container>
    <Background>
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="48" viewBox="0 0 43 48" fill="none">
  <path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
</svg>
    <h1>food explorer</h1>
    </Background>

      <Form>
        <h1>Faça login</h1>
        <div className='label'><span>Email</span>
        <InputLogin 
        placeholder="Exemplo: exemplo@exemplo.com.br"
        type="text"
        />
        </div>

        <div className='label'><span>Senha</span>
        <InputLogin 
        placeholder="No mínimo 6 caracteres"
        type="text"
        />
        </div>

        <Button 
        title="Entrar"
        />
       <a href="#">
        Criar uma conta
       </a>
      </Form>
    </Container>
  )
}
export default LogIn