import { NavLink } from 'react-router-dom'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Login', path: '/login' },
]

function NavigationPanel() {
  return (
    <nav className="navigation" aria-label="Main navigation">
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
    </nav>
  )
}

export default NavigationPanel
