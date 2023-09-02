import { FaTrashAlt } from 'react-icons/fa'

import { currencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'

import minusButton from '../../../../assets/circle-minus.svg'
import plusButton from '../../../../assets/circle-plus.svg'

import { Container } from './styles'
import { ConfirmOrder } from '../../../../components/ConfirmOrder/ConfirmOrder'

export function TableDescktop() {
  const { cart,  addSnackIntoCart,removeSnackFromCart, snackCartDecrement, snackCartIncrement } = useCart()

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
            <tr key={`${item.name}-${item.id}`}>
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
                    onClick={() => snackCartDecrement(item)}
                  >
                    <img src={minusButton} alt="Remover Item" />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type="button" onClick={() => snackCartIncrement(item)}>
                    <img src={plusButton} alt="Adicionar Item" />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type="button" onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}
