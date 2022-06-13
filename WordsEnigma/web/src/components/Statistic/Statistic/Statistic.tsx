import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_STATISTIC_MUTATION = gql`
  mutation DeleteStatisticMutation($id: String!) {
    deleteStatistic(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Statistic = ({ statistic }) => {
  const [deleteStatistic] = useMutation(DELETE_STATISTIC_MUTATION, {
    onCompleted: () => {
      toast.success('Statistic deleted')
      navigate(routes.statistics())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete statistic ' + id + '?')) {
      deleteStatistic({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Statistic {statistic.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{statistic.id}</td>
            </tr><tr>
              <th>Game played</th>
              <td>{statistic.gamePlayed}</td>
            </tr><tr>
              <th>Game won</th>
              <td>{statistic.gameWon}</td>
            </tr><tr>
              <th>Game lost</th>
              <td>{statistic.gameLost}</td>
            </tr><tr>
              <th>Streak</th>
              <td>{statistic.streak}</td>
            </tr><tr>
              <th>Average</th>
              <td>{statistic.average}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(statistic.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(statistic.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStatistic({ id: statistic.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(statistic.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Statistic
