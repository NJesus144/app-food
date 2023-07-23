import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { RpgPage } from './pages/MainPage/RpgPage/RpgPage';
import { RogueLikePage } from './pages/MainPage/RogueLikePage/RogueLikePage';
import { TerrorPage } from './pages/MainPage/TerrorPage/Terror';
import { FpsPage } from './pages/MainPage/FpsPage/FpsPage';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<RpgPage />} />
          <Route path="roguelike" element={<RogueLikePage />} />
          <Route path="terror" element={<TerrorPage />} />
          <Route path="fps" element={<FpsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
