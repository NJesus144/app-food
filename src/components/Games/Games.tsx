import { Container } from './styles';
import { FaShoppingCart } from "react-icons/fa";
import { currencyFormat } from '../../helpers/currencyFormat';

interface GamesProps {
  games: any[];
}

export function Games({ games }: GamesProps) {
  return (
    <Container>
      {games.map(game => (
        <div key={game.id} className="game">
          <h2>{game.name}</h2>
          <img src={game.image} alt={game.name} />
          <p>{game.description}</p>
          <div>
            <strong>{currencyFormat(game.price)}</strong>
            <button type="button"><FaShoppingCart/></button>
          </div>
        </div>
      ))}
    </Container>
  );
}