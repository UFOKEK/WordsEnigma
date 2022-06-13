import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: String!) {
    deleteGame(id: $id) {
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

const Game = ({ game }) => {
  const [deleteGame] = useMutation(DELETE_GAME_MUTATION, {
    onCompleted: () => {
      toast.success('Game deleted')
      navigate(routes.games())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete game ' + id + '?')) {
      deleteGame({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Game {game.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{game.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{game.name}</td>
            </tr><tr>
              <th>Tries</th>
              <td>{game.tries}</td>
            </tr><tr>
              <th>Started at</th>
              <td>{timeTag(game.startedAt)}</td>
            </tr><tr>
              <th>Finished at</th>
              <td>{timeTag(game.finishedAt)}</td>
            </tr><tr>
              <th>Correct</th>
              <td>{checkboxInputTag(game.correct)}</td>
            </tr><tr>
              <th>Duration</th>
              <td>{game.duration}</td>
            </tr><tr>
              <th>User id</th>
              <td>{game.userId}</td>
            </tr><tr>
              <th>Word id</th>
              <td>{game.wordId}</td>
            </tr><tr>
              <th>Words bank id</th>
              <td>{game.wordsBankId}</td>
            </tr><tr>
              <th>Statistics id</th>
              <td>{game.statisticsId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(game.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(game.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGame({ id: game.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(game.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Game
