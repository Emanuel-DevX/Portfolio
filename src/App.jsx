import { Routes, Route, useLocation } from 'react-router-dom'
import AppLauncherNavbar from './components/Navbar'
import AppWindow from './components/AppWindow'
import Home from './components/Home'
function App() {
  const location = useLocation()

  const isWindowRoute = location.pathname !== '/' && !location.pathname.startsWith('/blog')
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden relative">
        {isWindowRoute ? <AppWindow /> : <Home />}
        <AppLauncherNavbar />
        <Routes>
          <Route path="/" element={null} />
          <Route path="/me" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/chat" element={null} />
          {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
