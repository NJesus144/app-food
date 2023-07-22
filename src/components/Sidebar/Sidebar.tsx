import { Container } from './styles';

import menuImg from '../../assets/burguerIcon.png';
import { ReactComponent as SwordIcon } from '../../assets/sword2.svg';

export function Sidebar() {
  return (
    <Container>
      <button type="button">
        <img src={menuImg} alt="Abrir e fechar o menu" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#" className="active">
              <SwordIcon />
              <span>Ação</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
