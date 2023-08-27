import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo-game-controller-2.png'
import { Container } from './styles'
import { useCart } from '../../hooks/useCart'
import { FaShoppingCart } from 'react-icons/fa'

export function OrderHeader() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="Game" />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong>
          </span>
        </div>
        <FaShoppingCart />
      </div>
    </Container>
  )
}
