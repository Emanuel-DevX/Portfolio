import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import AppLauncherNavbar from './components/Navbar'
import AppWindow from './components/AppWindow'
import Home from './components/Home'
import AdminLogin from './apps/Admin/Login'
import AdminLayout from './apps/Admin/AdminLayout'
import Dashboard from './apps/Admin/Dashboard'
import Blogs from './apps/Admin/Blogs'
import Messages from './apps/Admin/Messages'
import { useEffect } from 'react'
function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Example: Shift + A
      if (e.shiftKey && e.key.toLowerCase() === 'a') {
        navigate('/admin')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])
  useEffect(() => {
    const recordVisit = async () => {
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/dashboard/visits`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      } catch (err) {
        console.error('Failed to record visit:', err)
      }
    }

    recordVisit()
  }, [])

  const isWindowRoute = location.pathname !== '/'
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden relative">
        {location.pathname === '/' && <Home />}
        {isWindowRoute && <AppWindow />}
        <AppLauncherNavbar />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/me" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/contact" element={null} />
          <Route path="/terminal" element={null} />
          <Route path="/tech" element={null} />

          <Route path="/blog" element={null} />
          <Route path="/blog/:slug" element={<AppWindow />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="messages" element={<Messages />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
