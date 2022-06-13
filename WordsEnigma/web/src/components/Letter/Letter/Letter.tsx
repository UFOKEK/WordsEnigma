import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_LETTER_MUTATION = gql`
  mutation DeleteLetterMutation($id: String!) {
    deleteLetter(id: $id) {
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

const Letter = ({ letter }) => {
  const [deleteLetter] = useMutation(DELETE_LETTER_MUTATION, {
    onCompleted: () => {
      toast.success('Letter deleted')
      navigate(routes.letters())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete letter ' + id + '?')) {
      deleteLetter({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Letter {letter.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{letter.id}</td>
            </tr><tr>
              <th>Letter</th>
              <td>{letter.letter}</td>
            </tr><tr>
              <th>Try row id</th>
              <td>{letter.tryRowId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(letter.createdAt)}</td>
            </tr><tr>
              <th>Modified at</th>
              <td>{timeTag(letter.modifiedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLetter({ id: letter.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(letter.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Letter
