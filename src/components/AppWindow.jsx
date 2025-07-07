import React from 'react'
import Chat from '../apps/Chat'
// import Projects from './apps/Projects'
// import other apps as needed

const appComponents = {
  Chat,
//   Projects,
  // Terminal: ...,
  // Blog: ...,
  // About: ...,
}

const AppWindow = ({ app, setActiveApp }) => {
  const AppComponent = appComponents[app]

  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-black/70 border border-zinc-800 rounded-xl shadow-lg backdrop-blur-md z-40 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-950 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          {/* App icon can go here based on app name if you want */}
          <span className="font-bold text-white">{app}</span>
        </div>
        <button
          className="text-red-500 hover:text-red-300 text-lg"
          onClick={() => setActiveApp(null)}
        >
          ✕
        </button>
      </div>
      <div className="p-4 max-h-[calc(100vh-10rem)] overflow-y-auto">
        {AppComponent ? <AppComponent /> : <div>App not found</div>}
      </div>
    </div>
  )
}

export default AppWindow
