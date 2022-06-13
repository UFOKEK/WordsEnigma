import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LanguageLayoutProps = {
  children: React.ReactNode
}

const LanguagesLayout = ({ children }: LanguageLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.languages()}
            className="rw-link"
          >
            Languages
          </Link>
        </h1>
        <Link
          to={routes.newLanguage()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Language
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default LanguagesLayout
