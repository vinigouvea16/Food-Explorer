import copywrite from '../../../assets/Subtitle.png'
import logofooter from '../../../assets/logofooter.png'
import { Container } from './style'
export function Footer() {
  return (
    <Container>
      <div>
        <img src={logofooter} alt="altered color brand color" id="logo" />
        <img src={copywrite} alt="copywrite info" id="copywrite" />
      </div>
    </Container>
  )
}
