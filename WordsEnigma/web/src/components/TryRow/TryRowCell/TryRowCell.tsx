import type { FindTryRowById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import TryRow from 'src/components/TryRow/TryRow'

export const QUERY = gql`
  query FindTryRowById($id: String!) {
    tryRow: tryRow(id: $id) {
      id
      gameId
      tries
      rowSize
      correct
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TryRow not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tryRow }: CellSuccessProps<FindTryRowById>) => {
  return <TryRow tryRow={tryRow} />
}
