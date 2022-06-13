import type { FindStatisticById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Statistic from 'src/components/Statistic/Statistic'

export const QUERY = gql`
  query FindStatisticById($id: String!) {
    statistic: statistic(id: $id) {
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

export const Empty = () => <div>Statistic not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ statistic }: CellSuccessProps<FindStatisticById>) => {
  return <Statistic statistic={statistic} />
}
