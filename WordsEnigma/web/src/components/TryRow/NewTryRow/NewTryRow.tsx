import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TryRowForm from 'src/components/TryRow/TryRowForm'

const CREATE_TRY_ROW_MUTATION = gql`
  mutation CreateTryRowMutation($input: CreateTryRowInput!) {
    createTryRow(input: $input) {
      id
    }
  }
`

const NewTryRow = () => {
  const [createTryRow, { loading, error }] = useMutation(CREATE_TRY_ROW_MUTATION, {
    onCompleted: () => {
      toast.success('TryRow created')
      navigate(routes.tryRows())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createTryRow({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New TryRow</h2>
      </header>
      <div className="rw-segment-main">
        <TryRowForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTryRow
