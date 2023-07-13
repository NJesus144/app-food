import { Container } from './styles';

import menuImg from '../../assets/iconburguer.png';

export function Sidebar() {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg}  alt='Abrir e fechar o menu'/>
      </button>
      <nav>
        <ul>
          <li>
            <a href="#">
              <span>Ação</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
