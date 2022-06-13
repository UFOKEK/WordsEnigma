import type { FindLanguageById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Language from 'src/components/Language/Language'

export const QUERY = gql`
  query FindLanguageById($id: String!) {
    language: language(id: $id) {
      id
      name
      code
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Language not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ language }: CellSuccessProps<FindLanguageById>) => {
  return <Language language={language} />
}
