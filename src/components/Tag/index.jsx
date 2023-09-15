import { Container } from './styles';

// eslint-disable-next-line react/prop-types
export function Ingredients({title, ...rest}){
  return(
    <Container{...rest}>
    {title}
    </Container>
  )
}