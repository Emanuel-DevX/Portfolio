import AppLauncherNavbar from './components/Navbar'
function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white overflow-hidden relative"></div>
      <AppLauncherNavbar activeApp={'Chat'} />
    </>
  )
}

export default App
