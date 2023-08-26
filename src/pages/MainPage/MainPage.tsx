import { Outlet } from 'react-router-dom'

import { Container } from './styles'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { MyOrder } from '../../components/MyOrder/MyOrder'

import logoImg from '../../assets/logo.svg'

export function MainPage() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
      <MyOrder />
    </Container>
  )
}
