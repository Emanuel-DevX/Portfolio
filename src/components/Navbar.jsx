/* eslint-disable no-unused-vars */
// AppLauncherNavbar.jsx
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { FaComments, FaLaptopCode, FaTerminal, FaUser, FaCode, FaBlog } from 'react-icons/fa'
const AppLauncherNavbar = () => {
  const apps = [
    { name: 'Projects', icon: FaLaptopCode },
    { name: 'Tech', icon: FaCode },
    { name: 'Me', icon: FaUser },
    { name: 'Blog', icon: FaBlog },
    { name: 'Contact', icon: FaComments },
    { name: 'Terminal', icon: FaTerminal },
  ]
  const appRoutes = {
    Projects: '/projects',
    Tech: '/tech',
    Me: '/me',
    Blog: '/blog',
    Contact: '/contact',
    Terminal: '/terminal',
  }

  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  //   const visibleApps = window.innerWidth < 768 ? apps.filter(app => app !== 'Terminal') : apps;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const visibleApps = isMobile ? apps.filter((app) => app.name !== 'Terminal') : apps

  return (
    <nav className="w-full max-w-2xl mx-auto fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
      <div className="relative bg-black/40 backdrop-blur-lg rounded-xl border-y-2 border-x-2 border-b-2 border-transparent animate-border-gradient overflow-x-auto flex justify-around items-center px-2 py-1 mx-2 md:py-3 space-x-1">
        {visibleApps.map(({ name, icon: Icon }) => {
          const route = appRoutes[name]
          const isActive = path == route

          return (
            <button
              key={name}
              onClick={() => {
                if (isActive) navigate("/")
                else navigate(route)
              }}
              className={`flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 py-1 md:py-2 rounded-md transition-transform duration-200 hover:scale-105 ${
                isActive ? 'md:bg-white/10 md:ring-2 md:ring-white/30 text-[#ce9c13]' : 'text-white'
              }`}
            >
              <div className="text-xl">
                <Icon />
              </div>
              <span className="text-[10px] sm:text-sm font-semibold text-white text-center sm:text-left">{name}</span>
            </button>
          )
        })}
      </div>

      {/* Gradient border animation */}
      <style>{`
      @keyframes fireBorder {
    0%   { border-color: #ff3c00; }
    10%  { border-color: #ff6600; }
    20%  { border-color: #ffaa00; }
    30%  { border-color: #ff8800; }
    40%  { border-color: #ff5500; }
    50%  { border-color: #ff2200; }
    60%  { border-color: #ff6600; }
    70%  { border-color: #ffaa00; }
    80%  { border-color: #ff8800; }
    90%  { border-color: #ff3c00; }
    100% { border-color: #ff2200; }
  }

  .animate-border-gradient {
    animation: fireBorder 15s linear infinite;
  }
      `}</style>
    </nav>
  )
}

export default AppLauncherNavbar
