import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_USER_SETTING_MUTATION = gql`
  mutation DeleteUserSettingMutation($id: String!) {
    deleteUserSetting(id: $id) {
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

const UserSetting = ({ userSetting }) => {
  const [deleteUserSetting] = useMutation(DELETE_USER_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('UserSetting deleted')
      navigate(routes.userSettings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete userSetting ' + id + '?')) {
      deleteUserSetting({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">UserSetting {userSetting.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userSetting.id}</td>
            </tr><tr>
              <th>Bio</th>
              <td>{userSetting.bio}</td>
            </tr><tr>
              <th>Theme</th>
              <td>{userSetting.theme}</td>
            </tr><tr>
              <th>Language id</th>
              <td>{userSetting.languageId}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(userSetting.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(userSetting.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserSetting({ id: userSetting.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userSetting.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserSetting
