import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/TryRow/TryRowsCell'

const DELETE_TRY_ROW_MUTATION = gql`
  mutation DeleteTryRowMutation($id: String!) {
    deleteTryRow(id: $id) {
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

const TryRowsList = ({ tryRows }) => {
  const [deleteTryRow] = useMutation(DELETE_TRY_ROW_MUTATION, {
    onCompleted: () => {
      toast.success('TryRow deleted')
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
    if (confirm('Are you sure you want to delete tryRow ' + id + '?')) {
      deleteTryRow({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Game id</th>
            <th>Tries</th>
            <th>Row size</th>
            <th>Correct</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tryRows.map((tryRow) => (
            <tr key={tryRow.id}>
              <td>{truncate(tryRow.id)}</td>
              <td>{truncate(tryRow.gameId)}</td>
              <td>{truncate(tryRow.tries)}</td>
              <td>{truncate(tryRow.rowSize)}</td>
              <td>{checkboxInputTag(tryRow.correct)}</td>
              <td>{timeTag(tryRow.createdAt)}</td>
              <td>{timeTag(tryRow.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.tryRow({ id: tryRow.id })}
                    title={'Show tryRow ' + tryRow.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editTryRow({ id: tryRow.id })}
                    title={'Edit tryRow ' + tryRow.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete tryRow ' + tryRow.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(tryRow.id)}
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

export default TryRowsList
