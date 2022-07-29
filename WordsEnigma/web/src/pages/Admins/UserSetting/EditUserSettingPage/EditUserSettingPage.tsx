import EditUserSettingCell from 'src/components/UserSetting/EditUserSettingCell'

type UserSettingPageProps = {
  id: string
}

const EditUserSettingPage = ({ id }: UserSettingPageProps) => {
  return <EditUserSettingCell id={id} />
}

export default EditUserSettingPage
