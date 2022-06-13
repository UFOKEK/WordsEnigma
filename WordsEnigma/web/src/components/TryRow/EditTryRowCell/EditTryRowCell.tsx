import type { EditTryRowById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TryRowForm from 'src/components/TryRow/TryRowForm'

export const QUERY = gql`
  query EditTryRowById($id: String!) {
    tryRow: tryRow(id: $id) {
      id
      gameId
      tries
      rowSize
      correct
      createdAt
      updatedAt
    }
  }
`
const UPDATE_TRY_ROW_MUTATION = gql`
  mutation UpdateTryRowMutation($id: String!, $input: UpdateTryRowInput!) {
    updateTryRow(id: $id, input: $input) {
      id
      gameId
      tries
      rowSize
      correct
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ tryRow }: CellSuccessProps<EditTryRowById>) => {
  const [updateTryRow, { loading, error }] = useMutation(UPDATE_TRY_ROW_MUTATION, {
    onCompleted: () => {
      toast.success('TryRow updated')
      navigate(routes.tryRows())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateTryRow({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit TryRow {tryRow.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TryRowForm tryRow={tryRow} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
