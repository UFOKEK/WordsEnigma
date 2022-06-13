import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type StatisticLayoutProps = {
  children: React.ReactNode
}

const StatisticsLayout = ({ children }: StatisticLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.statistics()}
            className="rw-link"
          >
            Statistics
          </Link>
        </h1>
        <Link
          to={routes.newStatistic()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Statistic
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default StatisticsLayout
