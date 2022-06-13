import type { FindUserSettingById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserSetting from 'src/components/UserSetting/UserSetting'

export const QUERY = gql`
  query FindUserSettingById($id: String!) {
    userSetting: userSetting(id: $id) {
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

export const Empty = () => <div>UserSetting not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ userSetting }: CellSuccessProps<FindUserSettingById>) => {
  return <UserSetting userSetting={userSetting} />
}
