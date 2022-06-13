import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type TryRowLayoutProps = {
  children: React.ReactNode
}

const TryRowsLayout = ({ children }: TryRowLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.tryRows()}
            className="rw-link"
          >
            TryRows
          </Link>
        </h1>
        <Link
          to={routes.newTryRow()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New TryRow
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default TryRowsLayout
