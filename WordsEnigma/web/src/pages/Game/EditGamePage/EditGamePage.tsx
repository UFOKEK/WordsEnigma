import EditGameCell from 'src/components/Game/EditGameCell'

type GamePageProps = {
  id: string
}

const EditGamePage = ({ id }: GamePageProps) => {
  return <EditGameCell id={id} />
}

export default EditGamePage
