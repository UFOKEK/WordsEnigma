import type { FindWords } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Words from 'src/components/Word/Words'

export const QUERY = gql`
  query FindWords {
    words {
      id
      word
      definition
      example
      languageId
      createdAt
      wordsBankId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No words yet. '}
      <Link
        to={routes.newWord()}
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

export const Success = ({ words }: CellSuccessProps<FindWords>) => {
  return <Words words={words} />
}