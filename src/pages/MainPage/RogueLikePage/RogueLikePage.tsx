import { Head } from '../../../components/Head/Head';
import { GameTitle } from '../../../components/GameTitle/GameTitle';
import { Games } from '../../../components/Games/Games';

export function RogueLikePage() {
  const data = [
    {
      id: 1,
      category: 'Rogue Like',
      name: 'Isaac',
      description:
        'The Binding of Isaac é um jogo eletrônico independente do gênero roguelike criado e desenvolvido por Edmund McMillen e Florian Himsl, e lançado para Microsoft Windows, OS X e Linux. O título e o enredo do jogo foram inspirados pela história bíblica do sacrifício de Isaque.',
      price: 24.5,
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e95e33e-738e-4ad3-91d5-de97191f9fd8/d884w2j-9c428022-4e66-44c3-b964-b43430791c90.png/v1/fill/w_1024,h_560/binding_of_isaac_rebirth_wallpaper_by_j0000n1233_d884w2j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYwIiwicGF0aCI6IlwvZlwvNmU5NWUzM2UtNzM4ZS00YWQzLTkxZDUtZGU5NzE5MWY5ZmQ4XC9kODg0dzJqLTljNDI4MDIyLTRlNjYtNDRjMy1iOTY0LWI0MzQzMDc5MWM5MC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.6Ts7gQ9Y8_RGafLz0F9Bi0cumAhhaZqVEb0nR7TKKHY',
    },
    {
      id: 2,
      category: 'Rogue Like',
      name: 'Vampire Survivors',
      description:
        "Vampire Survivors é um videogame shoot 'em up roguelike de 2022 desenvolvido e publicado por Luca Galante, também conhecido como poncle. Após um período de acesso antecipado a partir de dezembro de 2021, foi lançado para macOS, Windows, Xbox One, Xbox Series X/S, Android e iOS no final de 2022",
      price: 24.5,
      image: 'https://wallpapercave.com/wp/wp11596503.jpg',
    },
  ];

  return (
    <>
      <Head title="ROGUELIKE" />
      <GameTitle>Roguelike</GameTitle>
      <Games games={data} />
    </>
  );
}
