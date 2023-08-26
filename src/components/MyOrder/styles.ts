import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;

  background-color: #73ad22;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${lighten(0.1, '#73ad22')};
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  .cartIcon {
    width: 2rem;
    height: 2rem;
  }

  span:last-child {
    margin-left: 0.75rem;
    font-weight: 500;
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    top: 0.5rem;
    bottom: initial;

    span:first-child {
      display: none;
    }
  }
`
