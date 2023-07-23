import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { RpgPage } from './pages/MainPage/RpgPage/RpgPage';
import { RogueLike } from './pages/MainPage/RogueLike/RogueLike';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<RpgPage />} />
          <Route path="/roguelike" element={<RogueLike />} />
        </Route>
      </Routes>
    </Router>
  );
}
