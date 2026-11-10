import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmail,
  logInWithGoogle,
  logOut,
  signUpWithEmail,
} from './firebase.js'

const errorMessages = {
  'auth/email-already-in-use': 'An account already exists with this email address.',
  'auth/invalid-credential':
    'The email or password is incorrect. Check the details or create an account first.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/missing-password': 'Please enter your password.',
  'auth/network-request-failed':
    'A network error occurred. Check your connection and try again.',
  'auth/operation-not-allowed':
    'This login method is not enabled in the Firebase console.',
  'auth/popup-blocked': 'The Google login popup was blocked by your browser.',
  'auth/popup-closed-by-user':
    'Google login was cancelled before it was completed.',
  'auth/too-many-requests':
    'Too many attempts were made. Please wait and try again.',
  'auth/unauthorized-domain':
    'This website domain is not authorized in the Firebase console.',
  'auth/user-not-found': 'No account exists with this email address.',
  'auth/weak-password': 'The password must contain at least six characters.',
  'auth/wrong-password': 'The password entered for this account is incorrect.',
}

function getErrorMessage(error) {
  return errorMessages[error.code] || 'Authentication failed. Please try again.'
}

function LoginPage() {
  const [user, loading] = useAuthState(auth)
  const location = useLocation()
  const navigate = useNavigate()
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(location.state?.message || '')
  const [messageType, setMessageType] = useState('error')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const destination = location.state?.from || '/'

  const showMessage = (text, type = 'error') => {
    setMessage(text)
    setMessageType(type)
  }

  const finishLogin = () => {
    navigate(destination, { replace: true })
  }

  const handleEmailSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      if (isSigningUp) {
        await signUpWithEmail(email, password)
      } else {
        await logInWithEmail(email, password)
      }

      finishLogin()
    } catch (error) {
      showMessage(getErrorMessage(error))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsSubmitting(true)

    try {
      await logInWithGoogle()
      finishLogin()
    } catch (error) {
      showMessage(getErrorMessage(error))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLogout = async () => {
    await logOut()
    showMessage('You have been logged out.', 'success')
  }

  if (loading) {
    return (
      <main className="page">
        <p>Checking authentication...</p>
      </main>
    )
  }

  if (user) {
    return (
      <main className="page">
        <div className="login-card">
          <h1>Account</h1>
          <p>You are logged in as:</p>
          <p className="user-email">{user.email}</p>
          {message && <p className={`notification ${messageType}`}>{message}</p>}
          <button type="button" className="primary-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <div className="login-card">
        <h1>{isSigningUp ? 'Sign Up' : 'Login'}</h1>
        <p className="login-description">
          Sign in to access the Academics and Admission pages.
        </p>

        {message && <p className={`notification ${messageType}`}>{message}</p>}

        <form className="login-form" onSubmit={handleEmailSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="6"
            required
          />

          <button type="submit" className="primary-button" disabled={isSubmitting}>
            {isSigningUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        <button
          type="button"
          className="google-button"
          onClick={handleGoogleLogin}
          disabled={isSubmitting}
        >
          Continue with Google
        </button>

        <button
          type="button"
          className="text-button"
          onClick={() => {
            setIsSigningUp(!isSigningUp)
            setMessage('')
          }}
        >
          {isSigningUp
            ? 'Already have an account? Login'
            : 'No account? Sign up'}
        </button>
      </div>
    </main>
  )
}

export default LoginPage
