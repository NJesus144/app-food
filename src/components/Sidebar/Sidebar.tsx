import { useState } from 'react';

import { Container } from './styles';

import menuImg from '../../assets/burguerIcon.png';
import { ReactComponent as SwordIcon } from '../../assets/sword2.svg';

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);


const handleToggleMenu = () => {
  setMenuOpen(!menuOpen)
  
}

  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
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
          <li>
            <a href="#">
              <SwordIcon />
              <span>Ação</span>
            </a>
          </li>
          <li>
            <a href="#">
              <SwordIcon />
              <span>Ação</span>
            </a>
          </li>
          <li>
            <a href="#">
              <SwordIcon />
              <span>Ação</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
