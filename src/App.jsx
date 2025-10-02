import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHome from './components/Dashboard/DashboardHome'
import Profile from './components/Dashboard/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='app-container   w-full mx-auto  min-h-screen'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
          </Route>

        </Routes>

        
      </div>
    </Router>

  )
}

export default App
