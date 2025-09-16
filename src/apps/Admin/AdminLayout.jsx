import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { FaHome, FaBlog, FaEnvelope, FaUsers, FaSignOutAlt } from 'react-icons/fa'

const AdminLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token && location.pathname !== '/admin/login') {
      navigate('/admin/login', { replace: true, state: { from: location } })
    }

    const verifyToken = async () => {
      if (!token) return
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem('adminToken')
          navigate('/admin/login', { replace: true })
        }
      } catch {
        localStorage.removeItem('adminToken')
        navigate('/admin/login', { replace: true })
      }
    }
    verifyToken();
  }, [navigate, location])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  const isActive = (path) => {
    if (path === '/admin' && location.pathname === '/admin') return true
    if (path !== '/admin' && location.pathname.startsWith(path)) return true
    return false
  }

  const NavButton = ({ to, icon: Icon, children }) => (
    <button
      onClick={() => navigate(to)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
        isActive(to)
          ? 'bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 text-black shadow-lg'
          : 'text-zinc-300 hover:text-white hover:bg-zinc-800/50'
      }`}
    >
      <Icon className="text-lg" />
      <span>{children}</span>
    </button>
  )

  const isLoginPage = location.pathname === '/admin/login'

  return (
    <div className="h-screen overflow-y-scroll custom-scrollbar pb-15">
      {/* Header */}
      {!isLoginPage && (
        <header className="relative bg-black/30 backdrop-blur-xl border-b border-zinc-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-col md:flex-row">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 rounded-xl flex items-center justify-center">
                <FaUsers className="text-black text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center md:space-x-6 text-sm md:text-base p-2 flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <NavButton to="/admin" icon={FaHome}>
                  Dashboard
                </NavButton>
                <NavButton to="/admin/blogs" icon={FaBlog}>
                  Blogs
                </NavButton>
                <NavButton to="/admin/messages" icon={FaEnvelope}>
                  Messages
                </NavButton>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all duration-200 border border-red-500/30 font-medium"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </header>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
