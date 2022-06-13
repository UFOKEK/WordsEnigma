import type { FindWordBanks } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import WordBanks from 'src/components/WordBank/WordBanks'

export const QUERY = gql`
  query FindWordBanks {
    wordBanks {
      id
      name
      languageId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No wordBanks yet. '}
      <Link
        to={routes.newWordBank()}
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

export const Success = ({ wordBanks }: CellSuccessProps<FindWordBanks>) => {
  return <WordBanks wordBanks={wordBanks} />
}
