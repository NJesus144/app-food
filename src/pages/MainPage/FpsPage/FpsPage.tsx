import { Head } from '../../../components/Head/Head'
import { GameTitle } from '../../../components/GameTitle/GameTitle'
import { Games } from '../../../components/Games/Games'

export function FpsPage() {
  const data = [
    {
      id: 1,
      category: 'FPS',
      name: 'Valorant',
      description:
        'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.',
      price: 24.5,
      image:
        'https://t.ctcdn.com.br/8thYvMSLBrCDJq3bh4xsLumTs_s=/1400x788/smart/i587116.jpeg'
    },
    {
      id: 2,
      category: 'FPS',
      name: 'Black',
      description:
        'Black é um jogo de tiro em primeira pessoa desenvolvido pela Criterion Games e publicado pela Electronic Arts para PlayStation 2 e Xbox. O jogo é notável por sua ação altamente estilizada, bem como por sua qualidade de som e foco em efeitos destrutivos durante o jogo.',
      price: 24.5,
      image:
        'https://steamuserimages-a.akamaihd.net/ugc/368535631806391876/5C70A7ED64A444F023CF5987A4668B27338C7C19/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    }
  ]

  return (
    <>
      <Head title="FPS" />
      <GameTitle>Fps</GameTitle>
      <Games games={data} />
    </>
  )
}
