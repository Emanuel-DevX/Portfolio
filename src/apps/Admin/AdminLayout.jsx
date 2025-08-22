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
    <div className="min-h-screen bg-black">
      {/* Background Effects */}
      {!isLoginPage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/5 via-orange-300/5 to-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 via-purple-500/5 to-pink-600/5 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Header */}
      {!isLoginPage && (
        <header className="relative bg-black/30 backdrop-blur-xl border-b border-zinc-800 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            <nav className="flex items-center space-x-6">
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
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
