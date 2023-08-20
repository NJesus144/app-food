import { FaShoppingCart } from 'react-icons/fa'

import { Container } from './styles'

import { useCart } from '../../hooks/useCart'
import { currencyFormat } from '../../helpers/currencyFormat'
import { SkeletonGame } from '../SkeletonGame/SkeletonGame'
import { GameData } from '../../interfaces/GameData'

interface GamesProps {
  games: GameData[]
}

export function Games({ games }: GamesProps) {
  const { addGameIntoCart } = useCart()

  return (
    <Container>
      {!games.length
        ? [1, 2, 3, 4].map(n => <SkeletonGame key={n} />)
        : games.map(game => (
            <div key={game.id} className="game">
              <h2>{game.name}</h2>
              <img src={game.image} alt={game.name} />
              <p>{game.description}</p>
              <div>
                <strong>{currencyFormat(game.price)}</strong>
                <button type="button" onClick={() => addGameIntoCart(game)}>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
    </Container>
  )
}
