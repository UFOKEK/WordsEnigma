import GameCell from 'src/components/Game/GameCell'

type GamePageProps = {
  id: string
}

const GamePage = ({ id }: GamePageProps) => {
  return <GameCell id={id} />
}

export default GamePage
