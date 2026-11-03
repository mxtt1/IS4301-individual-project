import { Route, Routes } from 'react-router-dom'
import './App.css'
import AcademicsPage from './AcademicsPage.jsx'
import AdmissionPage from './AdmissionPage.jsx'
import HomePage from './HomePage.jsx'
import NavigationPanel from './NavigationPanel.jsx'

function App() {
  return (
    <>
      <NavigationPanel />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
      </Routes>
    </>
  )
}

export default App
