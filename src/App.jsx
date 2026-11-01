import { useState } from 'react'
import './App.css'
import AcademicsPage from './AcademicsPage.jsx'
import AdmissionPage from './AdmissionPage.jsx'
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
      {currentPage === 'admission' && <AdmissionPage />}
    </>
  )
}

export default App
