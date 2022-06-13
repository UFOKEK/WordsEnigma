import type { EditLetterById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import LetterForm from 'src/components/Letter/LetterForm'

export const QUERY = gql`
  query EditLetterById($id: String!) {
    letter: letter(id: $id) {
      id
      letter
      tryRowId
      createdAt
      modifiedAt
    }
  }
`
const UPDATE_LETTER_MUTATION = gql`
  mutation UpdateLetterMutation($id: String!, $input: UpdateLetterInput!) {
    updateLetter(id: $id, input: $input) {
      id
      letter
      tryRowId
      createdAt
      modifiedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ letter }: CellSuccessProps<EditLetterById>) => {
  const [updateLetter, { loading, error }] = useMutation(UPDATE_LETTER_MUTATION, {
    onCompleted: () => {
      toast.success('Letter updated')
      navigate(routes.letters())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateLetter({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Letter {letter.id}</h2>
      </header>
      <div className="rw-segment-main">
        <LetterForm letter={letter} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
