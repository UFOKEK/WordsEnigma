import type { FindLetters } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Letters from 'src/components/Letter/Letters'

export const QUERY = gql`
  query FindLetters {
    letters {
      id
      letter
      tryRowId
      createdAt
      modifiedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No letters yet. '}
      <Link
        to={routes.newLetter()}
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

export const Success = ({ letters }: CellSuccessProps<FindLetters>) => {
  return <Letters letters={letters} />
}
