import { Outlet } from 'react-router-dom';

import { Container } from './styles';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import logoImg from '../../assets/logo.svg';

export function MainPage() {
  return (
    <Container>
      <Sidebar />
      <section>
        <img src={logoImg} />
        <Outlet />
      </section>
    </Container>
  );
}
