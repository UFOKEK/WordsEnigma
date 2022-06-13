import type { FindTryRows } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import TryRows from 'src/components/TryRow/TryRows'

export const QUERY = gql`
  query FindTryRows {
    tryRows {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tryRows yet. '}
      <Link
        to={routes.newTryRow()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tryRows }: CellSuccessProps<FindTryRows>) => {
  return <TryRows tryRows={tryRows} />
}
