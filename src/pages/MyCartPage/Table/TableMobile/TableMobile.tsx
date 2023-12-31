import { FaTrashAlt } from 'react-icons/fa'

import { useCart } from '../../../../hooks/useCart'
import { currencyFormat } from '../../../../helpers/currencyFormat'

import { Container } from './styled'
import { ConfirmOrder } from '../../../../components/OrderCloseAction/ConfirmOrder/ConfirmOrder'

import minusButton from '../../../../assets/circle-minus.svg'
import plusButton from '../../../../assets/circle-plus.svg'

export function TableMobile() {
  const { cart, snackCartDecrement, snackCartIncrement, removeSnackFromCart } =
    useCart()

  return (
    <Container>
      {cart.map(item => (
        <div key={`${item.name}-${item.id}`} className="order-item">
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button type="button" onClick={() => snackCartDecrement(item)}>
                  <img src={minusButton} alt="Remover item" />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button type="button" onClick={() => snackCartIncrement(item)}>
                  <img src={plusButton} alt="Adicionar item" />
                </button>
              </div>
              <button type="button" onClick={() => removeSnackFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal</span>
              {currencyFormat(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}

      <ConfirmOrder />
    </Container>
  )
}
