import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_WORD_BANK_MUTATION = gql`
  mutation DeleteWordBankMutation($id: String!) {
    deleteWordBank(id: $id) {
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

const WordBank = ({ wordBank }) => {
  const [deleteWordBank] = useMutation(DELETE_WORD_BANK_MUTATION, {
    onCompleted: () => {
      toast.success('WordBank deleted')
      navigate(routes.wordBanks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete wordBank ' + id + '?')) {
      deleteWordBank({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">WordBank {wordBank.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{wordBank.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{wordBank.name}</td>
            </tr><tr>
              <th>Language id</th>
              <td>{wordBank.languageId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(wordBank.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(wordBank.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWordBank({ id: wordBank.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(wordBank.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default WordBank
