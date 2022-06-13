import type { FindStatistics } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Statistics from 'src/components/Statistic/Statistics'

export const QUERY = gql`
  query FindStatistics {
    statistics {
      id
      gamePlayed
      gameWon
      gameLost
      streak
      average
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No statistics yet. '}
      <Link
        to={routes.newStatistic()}
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

export const Success = ({ statistics }: CellSuccessProps<FindStatistics>) => {
  return <Statistics statistics={statistics} />
}
