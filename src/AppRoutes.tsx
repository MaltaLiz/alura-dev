import React from 'react'
import { AuthProvider } from 'hooks/useAuth'
import CodeEditor from 'pages/codeEditor'
import Login from 'pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<></>} />
          <Route path='/home' element={<CodeEditor />} />
          <Route path='/comunity' element={<></>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
