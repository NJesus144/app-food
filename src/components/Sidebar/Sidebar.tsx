import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import menuImg from '../../assets/burguerIcon.png';
import { ReactComponent as SwordIcon } from '../../assets/sword2.svg';

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <img src={menuImg} alt="Abrir e fechar o menu" />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to="/" >
              <SwordIcon />
              <span>RPG</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/roguelike" >
              <SwordIcon />
              <span>ROGUELIKE</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/terror"  >
              <SwordIcon />
              <span>TERROR</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/fps"  >
              <SwordIcon />
              <span>FPS</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
