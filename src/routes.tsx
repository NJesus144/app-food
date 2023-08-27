import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { RpgPage } from './pages/MainPage/RpgPage/RpgPage'
import { RogueLikePage } from './pages/MainPage/RogueLikePage/RogueLikePage'
import { HorrorPage } from './pages/MainPage/TerrorPage/Horror'
import { FpsPage } from './pages/MainPage/FpsPage/FpsPage'
import { MyCartPage } from './pages/MyCartPage/MyCartPage'

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<RpgPage />} />
          <Route path="roguelike" element={<RogueLikePage />} />
          <Route path="terror" element={<HorrorPage />} />
          <Route path="fps" element={<FpsPage />} />
        </Route>
        <Route path="cart" element={<MyCartPage />} />
      </Routes>
    </Router>
  )
}
