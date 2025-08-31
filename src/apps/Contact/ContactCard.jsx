import React from 'react'
import { FaUser, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactCard = () => {
  return (
    <div className="bg-gradient-to-br from-black/60 to-zinc-900/60 backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 shadow-2xl ">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
          <FaUser className="text-black text-lg" />
        </div>
        <h2 className="text-lg font-bold bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
          Contact Info
        </h2>
      </div>

      {/* Contact Links */}
      <div className="space-y-4">
        <a
          href="mailto:emanuelmolla@outlook.com"
          className="flex items-center gap-3 p-3 rounded-xl bg-black/30 hover:bg-black/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 group"
        >
          <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
            <FaEnvelope className="text-red-400 text-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-zinc-500 uppercase tracking-wide">Email</p>
            <p className="text-zinc-300 text-sm truncate">emanuelmolla@outlook.com</p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/emanuel-molla"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-black/30 hover:bg-black/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 group"
        >
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
            <FaLinkedin className="text-blue-400 text-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-zinc-500 uppercase tracking-wide">LinkedIn</p>
            <p className="text-zinc-300 text-sm truncate">emanuel-molla</p>
          </div>
        </a>

        <a
          href="https://github.com/Emanuel-DevX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl bg-black/30 hover:bg-black/50 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 group"
        >
          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
            <FaGithub className="text-purple-400 text-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-zinc-500 uppercase tracking-wide">GitHub</p>
            <p className="text-zinc-300 text-sm truncate">Emanuel-DevX</p>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-zinc-800">
        <p className="text-xs text-zinc-500 text-center">Let's connect and build something amazing!</p>
      </div>
    </div>
  )
}

export default ContactCard
