import React from 'react'
import { Route, Routes } from 'react-router'
import Instrument from './pages/instrument/Instrument'
import Analitycs from './pages/analitycs/Analitycs'
import Login from './pages/auth/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ForgotPassword from './pages/auth/ForgotPassword'

const Routing = () => {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="instrumento" element={ <Instrument /> } />
        <Route path="analiticas" element={ <Analitycs /> } />
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="recuperar" element={ <ForgotPassword /> } />
      </Routes>
    </div>
  )
}

export default Routing