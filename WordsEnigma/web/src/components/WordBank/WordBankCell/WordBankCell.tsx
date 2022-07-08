import type { FindWordBankById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import WordBank from 'src/components/WordBank/WordBank'

export const QUERY = gql`
  query FindWordBankById($id: String!) {
    wordBank: wordBank(id: $id) {
      id
      name
      languageId
      createdAt
      updatedAt
      
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>WordBank not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ wordBank }: CellSuccessProps<FindWordBankById>) => {
  return <WordBank wordBank={wordBank} />
}
