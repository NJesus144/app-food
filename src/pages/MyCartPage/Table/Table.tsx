import { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { TableDescktop } from './TableDesktop/TableDesktop'
import { TableMobile } from './TableMobile/TableMobile'
import { EmptyCart } from '../../../components/Empty/EmptyCart'

export function Table() {
  const [windowsWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  )
  const { cart } = useCart()

  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

    return () => {
      window.removeEventListener(
        'resize',
        updateTableComponentBasedInWindowWidth
      )
    }
  }, [])

  if (cart.length === 0)
    return <EmptyCart title="Ops! Parece que você não tem pedidos, peça já!" />

  return windowsWidth > 768 ? <TableDescktop /> : <TableMobile />
}
