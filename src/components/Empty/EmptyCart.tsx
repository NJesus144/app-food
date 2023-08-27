import { Container, Button } from './styles'

import buyGameImg from '../../assets/buyGames.png'

interface EmptyCartProps {
  title: string
}

export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to="/">Checar os jogos</Button>
      <img src={buyGameImg} alt="Video Game" />
    </Container>
  )
}
