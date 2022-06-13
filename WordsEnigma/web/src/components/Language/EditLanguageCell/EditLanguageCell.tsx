import type { EditLanguageById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import LanguageForm from 'src/components/Language/LanguageForm'

export const QUERY = gql`
  query EditLanguageById($id: String!) {
    language: language(id: $id) {
      id
      name
      code
      createdAt
      updatedAt
    }
  }
`
const UPDATE_LANGUAGE_MUTATION = gql`
  mutation UpdateLanguageMutation($id: String!, $input: UpdateLanguageInput!) {
    updateLanguage(id: $id, input: $input) {
      id
      name
      code
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ language }: CellSuccessProps<EditLanguageById>) => {
  const [updateLanguage, { loading, error }] = useMutation(UPDATE_LANGUAGE_MUTATION, {
    onCompleted: () => {
      toast.success('Language updated')
      navigate(routes.languages())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateLanguage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Language {language.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LanguageForm language={language} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
