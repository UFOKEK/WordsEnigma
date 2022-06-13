import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Game/GamesCell'

const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: String!) {
    deleteGame(id: $id) {
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

const GamesList = ({ games }) => {
  const [deleteGame] = useMutation(DELETE_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('Game deleted')
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
    if (confirm('Are you sure you want to delete game ' + id + '?')) {
      deleteGame({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Tries</th>
            <th>Started at</th>
            <th>Finished at</th>
            <th>Correct</th>
            <th>Duration</th>
            <th>User id</th>
            <th>Word id</th>
            <th>Words bank id</th>
            <th>Statistics id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{truncate(game.id)}</td>
              <td>{truncate(game.name)}</td>
              <td>{truncate(game.tries)}</td>
              <td>{timeTag(game.startedAt)}</td>
              <td>{timeTag(game.finishedAt)}</td>
              <td>{checkboxInputTag(game.correct)}</td>
              <td>{truncate(game.duration)}</td>
              <td>{truncate(game.userId)}</td>
              <td>{truncate(game.wordId)}</td>
              <td>{truncate(game.wordsBankId)}</td>
              <td>{truncate(game.statisticsId)}</td>
              <td>{timeTag(game.createdAt)}</td>
              <td>{timeTag(game.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.game({ id: game.id })}
                    title={'Show game ' + game.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editGame({ id: game.id })}
                    title={'Edit game ' + game.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete game ' + game.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(game.id)}
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

export default GamesList
