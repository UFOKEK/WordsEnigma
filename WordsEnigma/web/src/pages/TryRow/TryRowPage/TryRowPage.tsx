import TryRowCell from 'src/components/TryRow/TryRowCell'

type TryRowPageProps = {
  id: string
}

const TryRowPage = ({ id }: TryRowPageProps) => {
  return <TryRowCell id={id} />
}

export default TryRowPage
