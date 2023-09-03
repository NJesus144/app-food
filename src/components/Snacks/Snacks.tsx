import { FaShoppingCart } from 'react-icons/fa'

import { Container } from './styles'

import { useCart } from '../../hooks/useCart'
import { currencyFormat } from '../../helpers/currencyFormat'
import { SkeletonSnack } from '../SkeletonSnack/SkeletonSnack'
import { SnackData } from '../../interfaces/SnackData'

interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map(n => <SkeletonSnack key={n} />)
        : snacks.map(snack => {
            const snackExistent = cart.find(
              item => item.snack === snack.snack && item.id === snack.id
            )

            return (
              <div key={snack.id} className="snack">
                {snackExistent && <span>{snackExistent.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormat(snack.price)}</strong>
                  <button type="button" onClick={() => addSnackIntoCart(snack)}>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
