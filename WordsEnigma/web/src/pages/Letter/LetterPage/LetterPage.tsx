import LetterCell from 'src/components/Letter/LetterCell'

type LetterPageProps = {
  id: string
}

const LetterPage = ({ id }: LetterPageProps) => {
  return <LetterCell id={id} />
}

export default LetterPage
