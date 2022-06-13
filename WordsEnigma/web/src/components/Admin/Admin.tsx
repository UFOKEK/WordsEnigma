import { Link, routes } from "@redwoodjs/router"

const Admin = () => {
  const LinkList = [
    { id: 0, lists: <Link className="" to={routes.users()}>Users</Link>, new: <Link className="rw-button rw-button-small" to={routes.newUser()}>New User</Link> },
    { id: 1, lists: <Link className="" to={routes.userSettings()}>User Settings</Link>, new: <Link className="rw-button rw-button-small" to={routes.newUserSetting()}>New User Setting</Link> },
    { id: 2, lists: <Link className="" to={routes.languages()}>Languages</Link>, new: <Link className="rw-button rw-button-small" to={routes.newLanguage()}>New Language</Link> },
    { id: 3, lists: <Link className="" to={routes.words()}>Words</Link>, new: <Link className="rw-button rw-button-small" to={routes.newWord()}>New Word</Link> },
    { id: 4, lists: <Link className="" to={routes.wordBanks()}>Word Banks</Link>, new: <Link className="rw-button rw-button-small" to={routes.newWordBank()}>New Word Bank</Link> },
    { id: 5, lists: <Link className="" to={routes.letters()}>Letters</Link>, new: <Link className="rw-button rw-button-small" to={routes.newLetter()}>New Letter</Link> },
    { id: 6, lists: <Link className="" to={routes.games()}>Games</Link>, new: <Link className="rw-button rw-button-small" to={routes.newGame()}>New Game</Link> },
    { id: 7, lists: <Link className="" to={routes.statistics()}>Statistics</Link>, new: <Link className="rw-button rw-button-small" to={routes.newStatistic()}>New Statistic</Link> },
    { id: 8, lists: <Link className="" to={routes.tryRows()}>Try Rows</Link>, new: <Link className="rw-button rw-button-small" to={routes.newTryRow()}>New Try Row</Link> },
  ]

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          {LinkList.map((link) => (
            <tr key={link.id}>
              <th>{link.lists}</th>
              <th>
                <nav className="rw-table-actions">
                  {link.new}
                </nav>
              </th>
            </tr>
          ))}
        </thead>
      </table>

    </div>
  )
}

export default Admin
