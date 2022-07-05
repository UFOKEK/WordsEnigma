import type { EditGameById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import GameForm from 'src/components/Game/GameForm'

export const QUERY = gql`
  query EditGameById($id: Int!) {
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
const UPDATE_GAME_MUTATION = gql`
  mutation UpdateGameMutation($id: Int!, $input: UpdateGameInput!) {
    updateGame(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ game }: CellSuccessProps<EditGameById>) => {
  const [updateGame, { loading, error }] = useMutation(UPDATE_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('Game updated')
      navigate(routes.games())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { userId: parseInt(input.userId), wordId: parseInt(input.wordId), wordsBankId: parseInt(input.wordsBankId), statisticsId: parseInt(input.statisticsId), })
    updateGame({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Game {game.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GameForm game={game} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
