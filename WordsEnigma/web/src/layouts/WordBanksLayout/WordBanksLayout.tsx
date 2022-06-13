import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type WordBankLayoutProps = {
  children: React.ReactNode
}

const WordBanksLayout = ({ children }: WordBankLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.wordBanks()}
            className="rw-link"
          >
            WordBanks
          </Link>
        </h1>
        <Link
          to={routes.newWordBank()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New WordBank
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default WordBanksLayout
