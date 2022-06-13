import EditTryRowCell from 'src/components/TryRow/EditTryRowCell'

type TryRowPageProps = {
  id: string
}

const EditTryRowPage = ({ id }: TryRowPageProps) => {
  return <EditTryRowCell id={id} />
}

export default EditTryRowPage
