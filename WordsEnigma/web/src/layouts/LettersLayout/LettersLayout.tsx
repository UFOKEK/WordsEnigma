import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LetterLayoutProps = {
  children: React.ReactNode
}

const LettersLayout = ({ children }: LetterLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.letters()}
            className="rw-link"
          >
            Letters
          </Link>
        </h1>
        <Link
          to={routes.newLetter()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Letter
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default LettersLayout
