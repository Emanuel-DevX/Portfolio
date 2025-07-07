import React, { useState } from 'react'
import AppLauncherNavbar from './components/Navbar'
import AppWindow from './components/AppWindow'
import Home from './components/Home'
function App() {
  const [activeApp, setActiveApp] = useState(null)
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden relative">
        {activeApp ? <AppWindow app={activeApp} setActiveApp={setActiveApp} /> : <Home />}
        <AppLauncherNavbar activeApp={activeApp} setActiveApp={setActiveApp} />
      </div>
    </>
  )
}

export default App
