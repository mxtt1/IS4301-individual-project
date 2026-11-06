import { Route, Routes } from 'react-router-dom'
import './App.css'
import AcademicsPage from './AcademicsPage.jsx'
import AdmissionPage from './AdmissionPage.jsx'
import HomePage from './HomePage.jsx'
import LoginPage from './LoginPage.jsx'
import NavigationPanel from './NavigationPanel.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

function App() {
  return (
    <>
      <NavigationPanel />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/academics"
          element={
            <ProtectedRoute>
              <AcademicsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admission"
          element={
            <ProtectedRoute>
              <AdmissionPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
