import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_WORD_MUTATION = gql`
  mutation DeleteWordMutation($id: String!) {
    deleteWord(id: $id) {
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

const Word = ({ word }) => {
  const [deleteWord] = useMutation(DELETE_WORD_MUTATION, {
    onCompleted: () => {
      toast.success('Word deleted')
      navigate(routes.words())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete word ' + id + '?')) {
      deleteWord({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Word {word.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{word.id}</td>
            </tr><tr>
              <th>Word</th>
              <td>{word.word}</td>
            </tr><tr>
              <th>Definition</th>
              <td>{word.definition}</td>
            </tr><tr>
              <th>Example</th>
              <td>{word.example}</td>
            </tr><tr>
              <th>Synonym</th>
              <td>{word.synonym}</td>
            </tr><tr>
              <th>Size</th>
              <td>{word.size}</td>
            </tr><tr>
              <th>Source</th>
              <td>{word.source}</td>
            </tr><tr>
              <th>Language id</th>
              <td>{word.languageId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(word.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(word.updatedAt)}</td>
            </tr><tr>
              <th>Word bank id</th>
              <td>{word.wordBankId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWord({ id: word.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(word.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Word
