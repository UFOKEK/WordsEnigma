import type { EditUserSettingById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import UserSettingForm from 'src/components/UserSetting/UserSettingForm'

export const QUERY = gql`
  query EditUserSettingById($id: String!) {
    userSetting: userSetting(id: $id) {
      id
      bio
      theme
      languageId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_USER_SETTING_MUTATION = gql`
  mutation UpdateUserSettingMutation($id: String!, $input: UpdateUserSettingInput!) {
    updateUserSetting(id: $id, input: $input) {
      id
      bio
      theme
      languageId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userSetting }: CellSuccessProps<EditUserSettingById>) => {
  const [updateUserSetting, { loading, error }] = useMutation(UPDATE_USER_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('UserSetting updated')
      navigate(routes.userSettings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUserSetting({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit UserSetting {userSetting.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserSettingForm userSetting={userSetting} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
