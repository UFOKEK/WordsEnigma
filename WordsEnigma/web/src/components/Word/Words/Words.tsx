import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Word/WordsCell'

const DELETE_WORD_MUTATION = gql`
  mutation DeleteWordMutation($id: String!) {
    deleteWord(id: $id) {
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

const WordsList = ({ words }) => {
  const [deleteWord] = useMutation(DELETE_WORD_MUTATION, {
    onCompleted: () => {
      toast.success('Word deleted')
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
    if (confirm('Are you sure you want to delete word ' + id + '?')) {
      deleteWord({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Word</th>
            <th>Definition</th>
            <th>Example</th>
            <th>Synonym</th>
            <th>Size</th>
            <th>Source</th>
            <th>Language id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Word bank id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>{truncate(word.id)}</td>
              <td>{truncate(word.word)}</td>
              <td>{truncate(word.definition)}</td>
              <td>{truncate(word.example)}</td>
              <td>{truncate(word.synonym)}</td>
              <td>{truncate(word.size)}</td>
              <td>{truncate(word.source)}</td>
              <td>{truncate(word.languageId)}</td>
              <td>{timeTag(word.createdAt)}</td>
              <td>{timeTag(word.updatedAt)}</td>
              <td>{truncate(word.wordBankId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.word({ id: word.id })}
                    title={'Show word ' + word.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWord({ id: word.id })}
                    title={'Edit word ' + word.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete word ' + word.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(word.id)}
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

export default WordsList
