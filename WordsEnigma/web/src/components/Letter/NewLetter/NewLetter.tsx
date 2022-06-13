import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import LetterForm from 'src/components/Letter/LetterForm'

const CREATE_LETTER_MUTATION = gql`
  mutation CreateLetterMutation($input: CreateLetterInput!) {
    createLetter(input: $input) {
      id
    }
  }
`

const NewLetter = () => {
  const [createLetter, { loading, error }] = useMutation(CREATE_LETTER_MUTATION, {
    onCompleted: () => {
      toast.success('Letter created')
      navigate(routes.letters())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createLetter({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Letter</h2>
      </header>
      <div className="rw-segment-main">
        <LetterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLetter
