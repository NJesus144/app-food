import { Head } from '../../components/Head/Head'
import { OrderHeader } from '../../components/OrderHeader/OrderHeader'
import { Table } from './Table/Table'

import { Container } from './styles'

export function MyCartPage() {
  return (
    <Container>
      <Head title="Carrinho" />
      <OrderHeader />
      <Table />
    </Container>
  )
}
