import WordBankCell from 'src/components/WordBank/WordBankCell'

type WordBankPageProps = {
  id: string
}

const WordBankPage = ({ id }: WordBankPageProps) => {
  return <WordBankCell id={id} />
}

export default WordBankPage
