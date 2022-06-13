import type { FindUserSettings } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import UserSettings from 'src/components/UserSetting/UserSettings'

export const QUERY = gql`
  query FindUserSettings {
    userSettings {
      id
      bio
      theme
      languageId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No userSettings yet. '}
      <Link
        to={routes.newUserSetting()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userSettings }: CellSuccessProps<FindUserSettings>) => {
  return <UserSettings userSettings={userSettings} />
}
