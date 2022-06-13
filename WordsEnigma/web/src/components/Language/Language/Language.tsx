import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_LANGUAGE_MUTATION = gql`
  mutation DeleteLanguageMutation($id: String!) {
    deleteLanguage(id: $id) {
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

const Language = ({ language }) => {
  const [deleteLanguage] = useMutation(DELETE_LANGUAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Language deleted')
      navigate(routes.languages())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete language ' + id + '?')) {
      deleteLanguage({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Language {language.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{language.id}</td>
            </tr><tr>
              <th>Name</th>
              <td>{language.name}</td>
            </tr><tr>
              <th>Code</th>
              <td>{language.code}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(language.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(language.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLanguage({ id: language.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(language.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Language
