import type { FindGameById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Game from 'src/components/Game/Game'

export const QUERY = gql`
  query FindGameById($id: String!) {
    game: game(id: $id) {
      id
      name
      tries
      startedAt
      finishedAt
      correct
      duration
      userId
      wordId
      wordsBankId
      statisticsId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Game not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ game }: CellSuccessProps<FindGameById>) => {
  return <Game game={game} />
}
