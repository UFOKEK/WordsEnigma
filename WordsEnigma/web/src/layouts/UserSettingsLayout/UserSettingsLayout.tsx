import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type UserSettingLayoutProps = {
  children: React.ReactNode
}

const UserSettingsLayout = ({ children }: UserSettingLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.userSettings()}
            className="rw-link"
          >
            UserSettings
          </Link>
        </h1>
        <Link
          to={routes.newUserSetting()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New UserSetting
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default UserSettingsLayout
