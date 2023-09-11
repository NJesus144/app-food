import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import BurgersPage from './pages/MainPage/Burgers/Burgers'
import DrinksPage from './pages/MainPage/Drinks/Drinks'
import IceCreamsPage from './pages/MainPage/IceCreams/IceCreams'

import PizzasPage from './pages/MainPage/Pizzas/Pizzas'

import { MyCartPage } from './pages/MyCartPage/MyCartPage'
import { Payment } from './pages/Payment/Payment'
import OrderSuccessPage from './pages/Orders/Success/Success'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<BurgersPage />} />
        <Route path="pizzas" element={<PizzasPage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="ice-creams" element={<IceCreamsPage />} />
      </Route>
      <Route path="cart" element={<MyCartPage />} />
      <Route path="payment" element={<Payment />} />
      <Route path="order">
        <Route path="success/:orderId" element={<OrderSuccessPage />} />
      </Route>
    </Routes>
  )
}
