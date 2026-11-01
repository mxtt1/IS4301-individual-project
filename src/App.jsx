import { useState } from 'react'
import './App.css'
import AcademicsPage from './AcademicsPage.jsx'
import HomePage from './HomePage.jsx'
import NavigationPanel from './NavigationPanel.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <NavigationPanel
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'academics' && <AcademicsPage />}
      {currentPage === 'admission' && (
        <main className="page">
          <h1>Admission</h1>
          <p>This page will be added in the next stage.</p>
        </main>
      )}
    </>
  )
}

export default App
