import { useCart } from '../../../hooks/useCart'
import { TableDescktop } from './TableDesktop/TableDesktop'
export function Table() {
  const { cart } = useCart()

  if (cart.length === 0)
    return <h1>Ops! Parece que você não tem pedidos, peça já!</h1>

  return <TableDescktop />
}
