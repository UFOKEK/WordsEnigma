import type { EditWordById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import WordForm from 'src/components/Word/WordForm'

export const QUERY = gql`
  query EditWordById($id: Int!) {
    word: word(id: $id) {
      id
      word
      definition
      example
      languageId
      createdAt
      wordsBankId
    }
  }
`
const UPDATE_WORD_MUTATION = gql`
  mutation UpdateWordMutation($id: Int!, $input: UpdateWordInput!) {
    updateWord(id: $id, input: $input) {
      id
      word
      definition
      example
      languageId
      createdAt
      wordsBankId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ word }: CellSuccessProps<EditWordById>) => {
  const [updateWord, { loading, error }] = useMutation(UPDATE_WORD_MUTATION, {
    onCompleted: () => {
      toast.success('Word updated')
      navigate(routes.words())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { languageId: parseInt(input.languageId), wordsBankId: parseInt(input.wordsBankId), })
    updateWord({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Word {word.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WordForm word={word} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
