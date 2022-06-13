import EditLetterCell from 'src/components/Letter/EditLetterCell'

type LetterPageProps = {
  id: string
}

const EditLetterPage = ({ id }: LetterPageProps) => {
  return <EditLetterCell id={id} />
}

export default EditLetterPage
