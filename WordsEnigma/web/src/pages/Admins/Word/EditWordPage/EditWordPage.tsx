import EditWordCell from 'src/components/Word/EditWordCell'

type WordPageProps = {
  id: string
}

const EditWordPage = ({ id }: WordPageProps) => {
  return <EditWordCell id={id} />
}

export default EditWordPage
