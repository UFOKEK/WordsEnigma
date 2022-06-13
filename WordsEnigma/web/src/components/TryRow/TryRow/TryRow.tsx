import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TRY_ROW_MUTATION = gql`
  mutation DeleteTryRowMutation($id: String!) {
    deleteTryRow(id: $id) {
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

const TryRow = ({ tryRow }) => {
  const [deleteTryRow] = useMutation(DELETE_TRY_ROW_MUTATION, {
    onCompleted: () => {
      toast.success('TryRow deleted')
      navigate(routes.tryRows())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete tryRow ' + id + '?')) {
      deleteTryRow({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">TryRow {tryRow.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{tryRow.id}</td>
            </tr><tr>
              <th>Game id</th>
              <td>{tryRow.gameId}</td>
            </tr><tr>
              <th>Tries</th>
              <td>{tryRow.tries}</td>
            </tr><tr>
              <th>Row size</th>
              <td>{tryRow.rowSize}</td>
            </tr><tr>
              <th>Correct</th>
              <td>{checkboxInputTag(tryRow.correct)}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(tryRow.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(tryRow.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTryRow({ id: tryRow.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(tryRow.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TryRow
