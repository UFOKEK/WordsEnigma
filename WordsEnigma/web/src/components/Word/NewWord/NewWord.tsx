import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WordForm from 'src/components/Word/WordForm'

const CREATE_WORD_MUTATION = gql`
  mutation CreateWordMutation($input: CreateWordInput!) {
    createWord(input: $input) {
      id
    }
  }
`

const NewWord = () => {
  const [createWord, { loading, error }] = useMutation(CREATE_WORD_MUTATION, {
    onCompleted: () => {
      toast.success('Word created')
      navigate(routes.words())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createWord({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Word</h2>
      </header>
      <div className="rw-segment-main">
        <WordForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWord
