import UserSettingCell from 'src/components/UserSetting/UserSettingCell'

type UserSettingPageProps = {
  id: string
}

const UserSettingPage = ({ id }: UserSettingPageProps) => {
  return <UserSettingCell id={id} />
}

export default UserSettingPage
