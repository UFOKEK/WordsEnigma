import EditWordBankCell from 'src/components/WordBank/EditWordBankCell'

type WordBankPageProps = {
  id: string
}

const EditWordBankPage = ({ id }: WordBankPageProps) => {
  return <EditWordBankCell id={id} />
}

export default EditWordBankPage
