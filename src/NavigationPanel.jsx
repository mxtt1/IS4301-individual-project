const pages = ['home', 'academics', 'admission']

function NavigationPanel({ currentPage, onNavigate }) {
  return (
    <nav className="navigation" aria-label="Main navigation">
      {pages.map((page) => (
        <button
          className={currentPage === page ? 'active' : ''}
          key={page}
          type="button"
          onClick={() => onNavigate(page)}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      ))}
    </nav>
  )
}

export default NavigationPanel
