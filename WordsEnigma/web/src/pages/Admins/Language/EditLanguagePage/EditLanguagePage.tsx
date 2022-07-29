import EditLanguageCell from 'src/components/Language/EditLanguageCell'

type LanguagePageProps = {
  id: string
}

const EditLanguagePage = ({ id }: LanguagePageProps) => {
  return <EditLanguageCell id={id} />
}

export default EditLanguagePage
