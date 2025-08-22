import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const AdminLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/admin/login', { replace: true, state: { from: location } })
    }
  }, [navigate, location])

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
