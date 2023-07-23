import { Outlet } from 'react-router-dom';

import { Container } from './styles';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export function MainPage() {
  return (
    <Container>
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </Container>
  );
}
