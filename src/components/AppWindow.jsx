import { useLocation, useNavigate } from 'react-router-dom'
import { FaComments, FaLaptopCode, FaTerminal, FaUser, FaCode, FaBlog } from 'react-icons/fa'
import './appWindow.css'

import Contact from '../apps/Contact/Contact'
import Projects from '../apps/Projects/Projects'
import Tech from '../apps/Tech/Tech'
import Me from '../apps/Me/Me'
import Blog from '../apps/Blog/Blog'
import BlogDetail from '../apps/Blog/BlogDetail'

import Terminal from '../apps/Terminal/Terminal'

const appComponents = {
  '/projects': { name: 'Projects', icon: FaLaptopCode, component: Projects },
  '/tech': { name: 'Tech', icon: FaCode, component: Tech },
  '/me': { name: 'Me', icon: FaUser, component: Me },
  '/blog': { name: 'Blog', icon: FaBlog, component: Blog },
  '/contact': { name: 'Contact', icon: FaComments, component: Contact },
  '/terminal': { name: 'Terminal', icon: FaTerminal, component: Terminal },
}

const AppWindow = () => {
  const location = useLocation()
  const navigate = useNavigate()
  let path = Object.keys(appComponents).find((key) => pathStartsWith(location.pathname, key))

  const selectedApp = appComponents[path]

  function pathStartsWith(current, base) {
    if (base === '/blog') {
      return current === '/blog' || /^\/blog\/[^/]+$/.test(current)
    }
    return current === base || current.startsWith(base + '/')
  }

  if (!selectedApp) return null

  const { icon: Icon, name, component: Component } = selectedApp
  return (
    <div className="absolute top-2 bottom-20 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl  bg-black/70 border border-zinc-800 rounded-xl shadow-lg backdrop-blur-md z-40 overflow-hidden flex flex-col ">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-700 bg-zinc-800/90 backdrop-blur-lg">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white flex items-center gap-2">
            <Icon />
            {name}
          </span>
        </div>
        <button
          className="px-3 py-1 rounded-full bg-red-600 text-white font-bold hover:bg-red-500 transition-all duration-200 hover:scale-95"
          onClick={() => navigate('/')}
        >
          Close
        </button>
      </div>
      <div className="p-4 flex1 h-full overflow-y-auto overflow-auto custom-scrollbar  bg-zinc-900/90 backdrop-blur-lg">
        <div className='h-full'>{<Component  /> || <p className="text-gray-500">Unknown app.</p>}</div>
      </div>
    </div>
  )
}

export default AppWindow
