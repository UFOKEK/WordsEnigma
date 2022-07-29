import WordCell from 'src/components/Word/WordCell'

type WordPageProps = {
  id: string
}

const WordPage = ({ id }: WordPageProps) => {
  return <WordCell id={id} />
}

export default WordPage
