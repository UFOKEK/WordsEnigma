import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WordBankForm from 'src/components/WordBank/WordBankForm'

const CREATE_WORD_BANK_MUTATION = gql`
  mutation CreateWordBankMutation($input: CreateWordBankInput!) {
    createWordBank(input: $input) {
      id
    }
  }
`

const NewWordBank = () => {
  const [createWordBank, { loading, error }] = useMutation(CREATE_WORD_BANK_MUTATION, {
    onCompleted: () => {
      toast.success('WordBank created')
      navigate(routes.wordBanks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createWordBank({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New WordBank</h2>
      </header>
      <div className="rw-segment-main">
        <WordBankForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWordBank
