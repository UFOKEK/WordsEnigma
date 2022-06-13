import type { FindLanguages } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Languages from 'src/components/Language/Languages'

export const QUERY = gql`
  query FindLanguages {
    languages {
      id
      name
      code
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No languages yet. '}
      <Link
        to={routes.newLanguage()}
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

export const Success = ({ languages }: CellSuccessProps<FindLanguages>) => {
  return <Languages languages={languages} />
}
