import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'

export function RpgPage() {
  const data = [
    {
      id: 1,
      category: 'RPG',
      name: 'Final Fantasy XVI',
      description:
        'Final Fantasy XVI é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Square Enix. É o décimo sexto título principal da série Final Fantasy e foi lançado mundialmente em 22 de junho de 2023 para PlayStation 5.',
      price: 24.5,
      image: 'https://images8.alphacoders.com/132/thumbbig-1322923.webp'
    },
    {
      id: 2,
      category: 'RPG',
      name: 'Shaiya',
      description:
        'MMORPG com tema de fantasia com intenso combate baseado em facções e jogabilidade estratégica.',
      price: 24.5,
      image:
        'https://i.pinimg.com/originals/be/d0/29/bed029c7b6dbe14d81a1786272f35f21.jpg'
    }
  ]
  return (
    <>
      <Head title="RPG" />
      <GameTitle>RPG</GameTitle>
      <Games games={data} />
    </>
  )
}
