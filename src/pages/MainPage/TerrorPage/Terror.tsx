import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'

export function TerrorPage() {
  const data = [
    {
      id: 1,
      category: 'Terror',
      name: 'Resident Evil: Village',
      description:
        'Resident Evil: Village, conhecido no Japão como Biohazard: Village é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom. É a sequência de Resident Evil 7: Biohazard, de 2017, e foi anunciado pela primeira vez no evento de revelação do PlayStation 5 em 11 de junho de 2020.',
      price: 24.5,
      image: 'https://i.redd.it/75bn91ijvc451.png'
    },
    {
      id: 2,
      category: 'Terror',
      name: 'Remnant II',
      description:
        'Remnant 2 é um videogame RPG de ação e tiro em terceira pessoa desenvolvido pela Gunfire Games e publicado pela Gearbox Publishing. Como a sequência de Remnant: From the Ashes, o jogo foi lançado para PlayStation 5, Windows e Xbox Series X/S em julho de 2023.',
      price: 24.5,
      image: 'https://images4.alphacoders.com/129/1294901.jpg'
    }
  ]

  return (
    <>
      <Head title="TERROR" />
      <GameTitle>Terror</GameTitle>
      <Games games={data} />
    </>
  )
}
