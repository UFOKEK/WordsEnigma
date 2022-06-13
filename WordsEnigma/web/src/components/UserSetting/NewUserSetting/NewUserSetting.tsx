import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import UserSettingForm from 'src/components/UserSetting/UserSettingForm'

const CREATE_USER_SETTING_MUTATION = gql`
  mutation CreateUserSettingMutation($input: CreateUserSettingInput!) {
    createUserSetting(input: $input) {
      id
    }
  }
`

const NewUserSetting = () => {
  const [createUserSetting, { loading, error }] = useMutation(CREATE_USER_SETTING_MUTATION, {
    onCompleted: () => {
      toast.success('UserSetting created')
      navigate(routes.userSettings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUserSetting({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UserSetting</h2>
      </header>
      <div className="rw-segment-main">
        <UserSettingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUserSetting
