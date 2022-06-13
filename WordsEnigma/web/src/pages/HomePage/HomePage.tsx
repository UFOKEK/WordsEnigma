import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
    <MetaTags title="Home" description="Home page" />
    
    {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.roles}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
    </>
  )
}

export default HomePage;
