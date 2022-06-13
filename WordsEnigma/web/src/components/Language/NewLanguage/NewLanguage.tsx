import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import LanguageForm from 'src/components/Language/LanguageForm'

const CREATE_LANGUAGE_MUTATION = gql`
  mutation CreateLanguageMutation($input: CreateLanguageInput!) {
    createLanguage(input: $input) {
      id
    }
  }
`

const NewLanguage = () => {
  const [createLanguage, { loading, error }] = useMutation(CREATE_LANGUAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Language created')
      navigate(routes.languages())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createLanguage({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Language</h2>
      </header>
      <div className="rw-segment-main">
        <LanguageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLanguage
