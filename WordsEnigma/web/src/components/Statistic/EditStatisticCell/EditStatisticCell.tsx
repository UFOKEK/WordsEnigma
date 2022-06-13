import type { EditStatisticById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import StatisticForm from 'src/components/Statistic/StatisticForm'

export const QUERY = gql`
  query EditStatisticById($id: String!) {
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
const UPDATE_STATISTIC_MUTATION = gql`
  mutation UpdateStatisticMutation($id: String!, $input: UpdateStatisticInput!) {
    updateStatistic(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ statistic }: CellSuccessProps<EditStatisticById>) => {
  const [updateStatistic, { loading, error }] = useMutation(UPDATE_STATISTIC_MUTATION, {
    onCompleted: () => {
      toast.success('Statistic updated')
      navigate(routes.statistics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateStatistic({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Statistic {statistic.id}</h2>
      </header>
      <div className="rw-segment-main">
        <StatisticForm statistic={statistic} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
