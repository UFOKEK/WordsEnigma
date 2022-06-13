import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Statistic/StatisticsCell'

const DELETE_STATISTIC_MUTATION = gql`
  mutation DeleteStatisticMutation($id: String!) {
    deleteStatistic(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const StatisticsList = ({ statistics }) => {
  const [deleteStatistic] = useMutation(DELETE_STATISTIC_MUTATION, {
    onCompleted: () => {
      toast.success('Statistic deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete statistic ' + id + '?')) {
      deleteStatistic({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Game played</th>
            <th>Game won</th>
            <th>Game lost</th>
            <th>Streak</th>
            <th>Average</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {statistics.map((statistic) => (
            <tr key={statistic.id}>
              <td>{truncate(statistic.id)}</td>
              <td>{truncate(statistic.gamePlayed)}</td>
              <td>{truncate(statistic.gameWon)}</td>
              <td>{truncate(statistic.gameLost)}</td>
              <td>{truncate(statistic.streak)}</td>
              <td>{truncate(statistic.average)}</td>
              <td>{timeTag(statistic.createdAt)}</td>
              <td>{timeTag(statistic.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.statistic({ id: statistic.id })}
                    title={'Show statistic ' + statistic.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStatistic({ id: statistic.id })}
                    title={'Edit statistic ' + statistic.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete statistic ' + statistic.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(statistic.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StatisticsList
