import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Letter/LettersCell'

const DELETE_LETTER_MUTATION = gql`
  mutation DeleteLetterMutation($id: String!) {
    deleteLetter(id: $id) {
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

const LettersList = ({ letters }) => {
  const [deleteLetter] = useMutation(DELETE_LETTER_MUTATION, {
    onCompleted: () => {
      toast.success('Letter deleted')
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
    if (confirm('Are you sure you want to delete letter ' + id + '?')) {
      deleteLetter({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Letter</th>
            <th>Try row id</th>
            <th>Created at</th>
            <th>Modified at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {letters.map((letter) => (
            <tr key={letter.id}>
              <td>{truncate(letter.id)}</td>
              <td>{truncate(letter.letter)}</td>
              <td>{truncate(letter.tryRowId)}</td>
              <td>{timeTag(letter.createdAt)}</td>
              <td>{timeTag(letter.modifiedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.letter({ id: letter.id })}
                    title={'Show letter ' + letter.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLetter({ id: letter.id })}
                    title={'Edit letter ' + letter.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete letter ' + letter.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(letter.id)}
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

export default LettersList
