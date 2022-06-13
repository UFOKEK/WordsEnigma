import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import StatisticForm from 'src/components/Statistic/StatisticForm'

const CREATE_STATISTIC_MUTATION = gql`
  mutation CreateStatisticMutation($input: CreateStatisticInput!) {
    createStatistic(input: $input) {
      id
    }
  }
`

const NewStatistic = () => {
  const [createStatistic, { loading, error }] = useMutation(CREATE_STATISTIC_MUTATION, {
    onCompleted: () => {
      toast.success('Statistic created')
      navigate(routes.statistics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createStatistic({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Statistic</h2>
      </header>
      <div className="rw-segment-main">
        <StatisticForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStatistic
