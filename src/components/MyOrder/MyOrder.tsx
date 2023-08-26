import { FaShoppingCart } from 'react-icons/fa'

import { useCart } from '../../hooks/useCart'

import { Container } from './styles'

export function MyOrder() {
  const { cart } = useCart()

  return (
    <Container to={'cart'}>
      <span>Meu Pedido</span>
      <FaShoppingCart className="cartIcon" />

      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
    </Container>
  )
}
