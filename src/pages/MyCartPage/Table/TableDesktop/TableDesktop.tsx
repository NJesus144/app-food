import { FaTrashAlt } from 'react-icons/fa'

import { currencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'

import minusButton from '../../../../assets/circle-minus.svg'
import plusButton from '../../../../assets/circle-plus.svg'

import { Container } from './styles'

export function TableDescktop() {
  const { cart, removeGameFromCart, gameCartIncrement } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Jogo</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => console.log('Decrementar', item)}
                  >
                    <img src={minusButton} alt="Remover Item" />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type="button" onClick={() => gameCartIncrement(item)}>
                    <img src={plusButton} alt="Adicionar Item" />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type="button" onClick={() => removeGameFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
