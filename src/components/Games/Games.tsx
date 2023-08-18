import { Container } from './styles'
import { FaShoppingCart } from 'react-icons/fa'
import { currencyFormat } from '../../helpers/currencyFormat'
import { SkeletonGame } from '../SkeletonGame/SkeletonGame'
interface GamesProps {
  games: any[]
}

export function Games({ games }: GamesProps) {
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
                <button type="button">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
    </Container>
  )
}
