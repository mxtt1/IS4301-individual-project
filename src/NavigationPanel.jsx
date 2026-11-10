import { NavLink } from 'react-router-dom'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
]

function NavigationPanel() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="navigation-pages">
        {pages.map((page) => (
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={page.path === '/'}
            key={page.path}
            to={page.path}
          >
            {page.name}
          </NavLink>
        ))}
      </div>

      <NavLink
        className={({ isActive }) =>
          `login-link${isActive ? ' active' : ''}`
        }
        aria-label="Login or sign up"
        title="Login / Sign Up"
        to="/login"
      >
        <svg
          aria-hidden="true"
          className="account-icon"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      </NavLink>
    </nav>
  )
}

export default NavigationPanel
