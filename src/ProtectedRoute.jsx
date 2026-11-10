import { Navigate, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase.js'

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()

  if (loading) {
    return (
      <main className="page">
        <p>Checking authentication...</p>
      </main>
    )
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
          message: `Please log in to access the ${location.pathname.slice(1)} page.`,
        }}
      />
    )
  }

  return children
}

export default ProtectedRoute
