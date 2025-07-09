import React from 'react'
import { FaComments, FaLaptopCode, FaTerminal, FaUser, FaCode, FaBlog } from 'react-icons/fa'

import Chat from '../apps/Chat/Chat'
import Projects from '../apps/Projects/Projects'
import Tech from '../apps/Tech/Tech'
import Me from '../apps/Me/Me'
import Blog from '../apps/Blog/Blog'
import Terminal from '../apps/Terminal/Terminal'

const appComponents = {
  Projects: { icon: FaLaptopCode, component: Projects },
  Tech: { icon: FaCode, component: Tech },
  Me: { icon: FaUser, component: Me },
  Blog: { icon: FaBlog, component: Blog },
  Chat: { icon: FaComments, component: Chat },
  Terminal: { icon: FaTerminal, component: Terminal },
}

const AppWindow = ({ app, setActiveApp }) => {
  const selectedApp = appComponents[app]
  if (!selectedApp) return null

  const { icon: Icon, component: Component } = selectedApp

  return (
    <div className="absolute top-2 bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl  bg-black/70 border border-zinc-800 rounded-xl shadow-lg backdrop-blur-md z-40 overflow-hidden flex flex-col ">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-700 bg-zinc-800/90 backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white flex items-center gap-2">
            <Icon />
            {app}
          </span>
        </div>
        <button
          className="px-3 py-1 rounded-full bg-red-600 text-white font-bold hover:bg-red-500 transition-all duration-200 hover:scale-95"
          onClick={() => setActiveApp(null)}
        >
          Close
        </button>
      </div>
      <div className="p-4 flex1 h-full overflow-y-auto overflow-auto scrollbar-hide  bg-zinc-900/90 backdrop-blur-lg">
        <Component />
      </div>
      <style>
        {`
           .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </div>
  )
}

export default AppWindow
