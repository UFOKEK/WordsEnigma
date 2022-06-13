import type { FindWordById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Word from 'src/components/Word/Word'

export const QUERY = gql`
  query FindWordById($id: String!) {
    word: word(id: $id) {
      id
      word
      definition
      example
      synonym
      size
      source
      languageId
      createdAt
      updatedAt
      wordBankId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Word not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ word }: CellSuccessProps<FindWordById>) => {
  return <Word word={word} />
}
