import type { FindLetterById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Letter from 'src/components/Letter/Letter'

export const QUERY = gql`
  query FindLetterById($id: String!) {
    letter: letter(id: $id) {
      id
      letter
      tryRowId
      createdAt
      modifiedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Letter not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ letter }: CellSuccessProps<FindLetterById>) => {
  return <Letter letter={letter} />
}
