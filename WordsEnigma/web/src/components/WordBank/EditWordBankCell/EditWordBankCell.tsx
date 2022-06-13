import type { EditWordBankById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WordBankForm from 'src/components/WordBank/WordBankForm'

export const QUERY = gql`
  query EditWordBankById($id: String!) {
    wordBank: wordBank(id: $id) {
      id
      name
      languageId
      createdAt
      updatedAt
    }
  }
`
const UPDATE_WORD_BANK_MUTATION = gql`
  mutation UpdateWordBankMutation($id: String!, $input: UpdateWordBankInput!) {
    updateWordBank(id: $id, input: $input) {
      id
      name
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

export const Success = ({ wordBank }: CellSuccessProps<EditWordBankById>) => {
  const [updateWordBank, { loading, error }] = useMutation(UPDATE_WORD_BANK_MUTATION, {
    onCompleted: () => {
      toast.success('WordBank updated')
      navigate(routes.wordBanks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateWordBank({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit WordBank {wordBank.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WordBankForm wordBank={wordBank} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
