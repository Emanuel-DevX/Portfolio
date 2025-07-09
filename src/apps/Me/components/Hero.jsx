import React from 'react'
import { FaGraduationCap, FaPuzzlePiece, FaMapMarkerAlt } from 'react-icons/fa'
import  EmanuelImg from "/image.jpg"

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black/20 to-zinc-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-r from-yellow-400 via-orange-300 to-red-600 p-1">
            <img
              src={EmanuelImg}
              alt="Emanuel Molla"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-300 to-red-600 bg-clip-text text-transparent">
            Hi, I'm Emanuel
          </h1>
          <p className="lg:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            I love solving real problems with code, building tools that help people, and constantly learning how
            technology works behind the scenes.
          </p>
        </div>

        <div className="flex  justify-center space-x-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Surrey, BC</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-blue-400" />
            <span>BCIT Student</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPuzzlePiece className="text-amber-400" />
            <span>Problem Solver</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
